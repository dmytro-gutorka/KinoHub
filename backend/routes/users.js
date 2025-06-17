import { User } from '../models/index.js';

import express from 'express'

export const router = express.Router()

router.post('/', (req, res) => {
  User.create(req.body)
  res.json({ mes: 'User created' })
})

router.get('/', async (req, res) => {
  const users = await User.findAll()
  res.json({ users })
})