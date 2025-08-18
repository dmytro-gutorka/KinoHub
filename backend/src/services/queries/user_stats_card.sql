WITH
    mua AS (SELECT * FROM "media_user_action" WHERE "userId" = $1),

    ratings AS (
        SELECT
            COUNT(rating) number_of_ratings,
            AVG(rating) avg_rating,
            MAX(rating) max_rating,
            MIN(rating) min_rating
        FROM mua
        WHERE rating IS NOT NULL
    ),

    runtimes AS (
        SELECT
            SUM(mi."runtime") FILTER (WHERE mi."mediaType"='movie') AS runtime_movie,
            SUM(mi."runtime") FILTER (WHERE mi."mediaType"='tv')    AS runtime_tv
        FROM mua
        JOIN "media_info" mi
        ON mi."id" = mua."mediaInfoId"
    ),

    watched AS (
        SELECT
            COUNT(*) FILTER (WHERE mi."mediaType"='movie') AS watched_movie,
            COUNT(*) FILTER (WHERE mi."mediaType"='tv')    AS watched_tv
        FROM mua JOIN "media_info" mi ON mi."id" = mua."mediaInfoId"
        WHERE mua."isWatched" = true
    ),

    comments AS (SELECT COUNT(*) comment_count FROM "comments" WHERE "userId"=$1),
    episodes AS (SELECT COUNT(*) episodes_watched FROM "episode" WHERE "userId"=$1 AND "isWatched"=true)

SELECT
    r.number_of_ratings, r.avg_rating, r.max_rating, r.min_rating,
    rt.runtime_movie, rt.runtime_tv,
    w.watched_movie, w.watched_tv,
    c.comment_count, e.episodes_watched
FROM
    ratings r, runtimes rt, watched w, comments c, episodes e;
