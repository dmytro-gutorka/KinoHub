import { MovieBoard } from '../models/index.js';
import express from 'express'

export const router = express.Router()


router.get('/', async (req, res) => {
    const mediaId = req.params.id
    const userId = req.query.userid

    await MovieBoard.findAll({
        where: {
            userId: userId
        }
    })

    res.status(200).json(
        { msg: `MovieBoard item [${mediaId}] was created`})
})

router.post('/', async (req, res) => {
    const mediaId = req.params.id
    const userId = req.query.userid

    await MovieBoard.create({
        mediaId: mediaId,
        userId: userId
    })

    res.status(200).json(
        { msg: `MovieBoard item [${mediaId}] was created`})
})

router.delete('/', async (req, res) => {
    const mediaId = req.params.id
    const userId = req.query.userid

    await MovieBoard.destroy({
        where: {
            mediaId: mediaId,
            userId: userId
        }
    })
    res.status(204).json(
        { msg: `MovieBoard item [${mediaId}] was removed`})
})