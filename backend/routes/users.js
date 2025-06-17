import { User } from '../models/index.js';

import express from 'express'

export const router = express.Router()

router.post('/', async (req, res) => {
  const user = await User.create(req.body)
  res.json({ user })

})

router.get('/', async (req, res) => {
  const users = await User.findAll()
  res.json({ users })
})