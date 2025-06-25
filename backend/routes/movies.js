import { MovieAction, MovieBoard } from '../models/index.js';
import { Op } from "sequelize";
import express from 'express'

export const router = express.Router()

// actions
router.get('/:id/actions', async (req, res) => {
  const movieID = Number(req.params.id)
  const season = Number(req.query?.season)

  let movieActionById

  if (season) movieActionById =
    await MovieAction.findAll(
    { where: { movieId: movieID, season: season }, raw: true })

  if (!season) movieActionById =
    await MovieAction.findAll({ where: { movieId: movieID } })

  res.status(200)
      .json(movieActionById)
})

// @ratings
router.put('/:id/rating', async (req, res) => {
  const movieID = req.params.id;
  const userID = req.body.userId
  const rating = req.body.rating

  await MovieAction.update(
    { rating: rating },
    { where: { movieId: movieID, userId: userID }}
  )

  res.status(200).json({
    msg: `Rating on movie ${movieID} was updated. Current rating is ${rating}`
  });
})

// @like
router.put('/:id/like', async (req, res) => {
  const movieID = req.params.id;
  const userID = req.query.userid
  const isLiked = req.body.isLiked

  console.log(req.body)

  await MovieAction.update(
    {
      isLiked: isLiked,
      releaseDate: req.body.releaseDate,
      title: req.body.title,
      posterPath: req.body.posterPath,
      voteAverage: req.body.voteAverage,
    },
    {
      where: {
        movieId: movieID, userId: userID
      }
    }
  )

  res.status(200).json({
    msg: `Like status on movie ${movieID} was changed to ${isLiked ? 'liked' : 'not liked yet'}`
  });
})

// @isWatched
router.put('/:id/is-watched', async (req, res) => {
  const movieID = req.params.id;
  const userID = req.query.userid
  const isWatched = req.body.isWatched

  const season = req.body?.season
  const episode = req.body?.episode


  if (season && episode) await MovieAction.update(
    { isWatched: isWatched },
    { where: {
        movieId: movieID,
        userId: userID,
        season: season,
        episode: episode,
      }}
  )

  if (!season || !episode ) await MovieAction.update(
    { isWatched: isWatched },
    { where: { movieId: movieID, userId: userID } }
  )

  res.status(200).json({
    msg: `Watch status on movie ${movieID} was changed to ${isWatched ? 'watched' : 'not watched yet'}`
  });
})


// @watch-status
router.get('/watch-status', async(req, res) => {
  const userId = req.query.userid

  const mediaItemsWithStatus = await MovieAction.findAll({
    where: {
      userId: userId,
      watchStatus: { [Op.not]: null }
    },
    attributes: ['movieId', 'runtime', 'watchStatus', 'releaseDate', 'title', 'posterPath', 'voteAverage']
  })

  res.status(200).json(mediaItemsWithStatus)
})

router.put('/:id/watch-status', async (req, res) => {
  const movieID = req.params.id;
  const userID = req.query.userid
  const watchStatus = req.body.watchStatus

  await MovieAction.update(
      {
        watchStatus: watchStatus,
        releaseDate: req.body.releaseDate,
        title: req.body.title,
        posterPath: req.body.posterPath,
        voteAverage: req.body.voteAverage,
      },
      {
        where: {
          movieId: movieID,
          userId: userID,
          season: null,
          episode: null,
        }
      }
  )

  res.status(200).json({
    msg: `Watch status on movie ${movieID} was changed to ${watchStatus}`
  });
})


// @action
router.post('/:id/action', async (req, res) => {
  const movieID = Number(req.params.id);
  const userID = Number(req.query.userid)

  const mediaAction = await MovieAction.findOrCreate({
    where: {
      movieId: movieID,
      userId: userID,
      season: null,
      episode: null,
    },
    defaults: {
      ...req.body,
      movieId: movieID,
      userId: userID
    },
    raw: true
  })

  if (mediaAction[1]) return res.status(201).json(mediaAction[0]);
  if (!mediaAction[1]) return res.status(200).json(mediaAction[0]);
})

router.put('/:id/action', async (req, res) => {
  const movieID = req.params.id;
  const userID = req.body.userId

  await MovieAction.update(
    { ...req.body, movieId: movieID },
    { where: { movieId: movieID, userId: userID }}
  )

  res.status(200).json({
    msg: `Movie action for movie ${movieID} was updated.`
  });
})

router.get('/:id/action', async (req, res) => {
  const movieID = req.params.id
  const userID = req.query.userid

  const movieBoardItemById = await MovieAction.findOne({
    where: {
      movieId: movieID, userId: userID
    }
  })

  if (!movieBoardItemById) {
    return res.status(404).json({
      message: `Could not find anything by on movie ${movieID} for user ${userID}`,
      status: 404,
    })
  }
  res.status(200).json(movieBoardItemById)
})


router.post('/:id/action/bulk', async (req, res) => {
  const movieId = Number(req.params.id);
  const userId = Number(req.query.userid)

  const episodes = req.body.map(episode => {
    return {
      ...episode,
      movieId: movieId,
      userId: userId,
    }
  })

  await Promise.all(
    episodes.map(episode => MovieAction.upsert(episode))
  )

  const updatedEpisodes = await MovieAction.findAll({
    where: {
      userId: userId,
      movieId: movieId,
      season: req.body[0].season
    },
  },
    { raw: true }
  )

  res.status(200).json(updatedEpisodes)
})