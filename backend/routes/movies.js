import { MovieAction, MovieBoard } from '../models/index.js';
import express from 'express'

export const router = express.Router()

// @movie actions
router.get('/:id/actions', async (req, res) => {
  const movieID = req.params.id
  const movieActionById = await MovieAction.findAll({ where: { movieId: movieID } })
  res.status(200).json({movieActionById})
})

// @movie board
router.get('/:id/movie-board', async (req, res) => {
  const userID = req.params.id
  const movieBoardItemById = await MovieBoard.findAll({
    where: {
      userId: userID
    }
  })
  res.status(200).json(movieBoardItemById)
})

router.post('/:id/movie-board', (req, res) => {
  const movieID = req.params.id
  MovieBoard.create({
    ...req.body,
    movieId: movieID
  })

  res.status(201).json({ msg: `MovieBoard item [${movieID}] was created`})
})

router.put('/:id/movie-board',async (req, res) => {
  const movieID = req.params.id
  await MovieBoard.update(
    { status: req.body.status },
    { where: { movieId: movieID } }
  )
  res.status(200).json({ msg: `MovieBoard item [${movieID}] was updated`})
})

router.delete('/:id/movie-board', async (req, res) => {
  const movieID = req.params.id
  await MovieBoard.destroy({ where: { movieId: movieID } })
  res.status(204).json({ msg: `MovieBoard item [${movieID}] was removed`})
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

  await MovieAction.update(
    { isLiked: isLiked },
    { where: { movieId: movieID, userId: userID }}
  )

  res.status(200).json({
    msg: `Like status on movie ${movieID} was changed to ${isLiked ? 'liked' : 'not liked yet'}`
  });
})

// @watch-status
router.put('/:id/is-watched', async (req, res) => {
  const movieID = req.params.id;
  const userID = req.query.userid
  const isWatched = req.body.isWatched

  await MovieAction.update(
    { isWatched: isWatched },
    { where: { movieId: movieID, userId: userID }}
  )

  res.status(200).json({
    msg: `Watch status on movie ${movieID} was changed to ${isWatched ? 'watched' : 'not watched yet'}`
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

  const mediaAction = await MovieAction.bulkCreate()

console.log(req.body)
  res.status(200).json({message: 'OK'})

})