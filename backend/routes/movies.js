import express from 'express'

export const router = express.Router()

// @movie actions
router.get('/:id/actions', (req, res) => {
  console.log(req.originalUrl, req.params.id)
  res.status(200).json({ rating: 10, isLiked: true })
})

// @movie board
router.get('/:id/movieboard', (req, res) => {

})

router.post('/:id/movieboard', (req, res) => {
  const itemId = req.params.id
  res.status(201).json({message: `item ${itemId} was created`, id: itemId})
})

router.put('/:id/movieboard', (req, res) => {

})

router.delete('/:id/movieboard', (req, res) => {

})

// @ratings
router.post('/:id/ratings', (req, res) => {

})

router.put('/:id/ratings', (req, res) => {

})

// @likes
router.post('/id/likes', (req, res) => {

})

router.delete('/:id/likes', (req, res) => {

})