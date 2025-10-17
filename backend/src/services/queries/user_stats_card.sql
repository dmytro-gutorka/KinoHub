WITH
    mua AS (
        SELECT * FROM "media_user_action"
        WHERE "userId" = $1
        AND $4::text IS NULL OR "mediaType" = $4
        AND ($2::timestamptz IS NULL OR "updatedAt" >= $2)
        AND ($3::timestamptz IS NULL OR "updatedAt" < $3)
        ),

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
        SELECT SUM(mi."runtime") AS overall_runtime
        FROM mua
        JOIN "media_info" mi
        ON mi."id" = mua."mediaInfoId"
    ),

    watched AS (
        SELECT COUNT(*) AS watched_media
        FROM mua JOIN "media_info" mi ON mi."id" = mua."mediaInfoId"
        WHERE mua."isWatched" = true
    ),

    comments AS (
        SELECT COUNT(*) comment_count
        FROM "comments"
        WHERE "userId"=$1
        AND ($2::timestamptz IS NULL OR "updatedAt" >= $2)
        AND ($3::timestamptz IS NULL OR "updatedAt" <  $3)
        AND $4::text IS NULL OR "mediaType" = $4
    ),

    episodes AS (
        SELECT COUNT(*) episodes_watched
        FROM "episode"
        WHERE "userId"=$1
        AND "isWatched"=true
        AND ($2::timestamptz IS NULL OR "updatedAt" >= $2)
        AND ($3::timestamptz IS NULL OR "updatedAt" <  $3)
        )
SELECT
    w.watched_media,
    rt.overall_runtime,
    r.number_of_ratings,
    r.avg_rating,
    r.max_rating,
    r.min_rating,
    c.comment_count,
    e.episodes_watched
FROM
    ratings r, runtimes rt, watched w, comments c, episodes e;
