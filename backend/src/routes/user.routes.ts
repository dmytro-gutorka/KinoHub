import {
  getUserProfile,
  getUserStats,
  updateUserProfile,
} from '../controllers/user-stat.controllers.js';
import express from 'express';
import { getUsers } from '../controllers/user.controllers.js';

export const router = express.Router();

router.get('/', getUsers);

router.get('/:userId/stats', getUserStats);
router.get('/:userId/profile', getUserProfile);

router.patch('/:userId/profile', updateUserProfile);
