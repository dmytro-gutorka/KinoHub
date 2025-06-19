import express from 'express'
import { MovieAction, MovieBoard } from '../models/index.js';

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
  res.status(200).json({movieBoardItemById})
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
router.post('/:id/rate', async (req, res) => {
  const movieID = req.params.id;
  const ratings = req.body.ratings
  await MovieAction.create(
    { ...req.body, movieId: movieID });
  res.status(201).json({ ratings });
})

router.put('/:id/rate', async (req, res) => {
  const movieID = req.params.id;
  const userID = req.body.userId
  const ratings = req.body.ratings

  await MovieAction.update(
    { ratings: ratings },
    { where: { movieId: movieID, userId: userID }}
  )

  res.status(200).json({
    msg: `Rating on movie ${movieID} was updated. Current rating is ${ratings}`
  });
})

// @likes
router.post('/:id/likes', async (req, res) => {
    const movieID = req.params.id;
    const isLiked = req.body.isLiked
    await MovieAction.create(
      { ...req.body, movieId: movieID });
    res.status(201).json({ isLiked });
});

router.put('/:id/likes', async (req, res) => {
  const movieID = req.params.id;
  const userID = req.body.userId
  const isLiked = req.body.isLiked

  await MovieAction.update(
    { isLiked: isLiked },
    { where: { movieId: movieID, userId: userID }}
  )

  res.status(200).json({
    msg: `Like on movie ${movieID} was ${isLiked ? 'added' : 'removed'}`
  });
})

// @watched


// @movie-action
router.post('/:id/action', async (req, res) => {
  const movieID = req.params.id;

  await MovieAction.create({ ...req.body, movieId: movieID });
  res.status(201).json({ ...req.body, movieId: movieID });
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

  if (movieBoardItemById?.length === 0) {
    res.status(404).json({message: `Could not find anything by on movie ${movieID} for user ${userID}`})

  }
  res.status(200).json({movieBoardItemById})

})
