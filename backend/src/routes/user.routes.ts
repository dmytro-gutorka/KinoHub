import {
  getUserProfile,
  getUserStats,
  updateUserProfile,
} from '../controllers/user-stats.controller.js';
import express from 'express';
import { getUsers } from '../controllers/users.controller.js';

export const router = express.Router();

router.get('/', getUsers);

router.get('/:userId/stats', getUserStats);
router.get('/:userId/profile', getUserProfile);

router.patch('/:userId/profile', updateUserProfile);
