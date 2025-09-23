import { getUserProfile, getUserStats } from '../controllers/users.controller.js';
import express from 'express';

export const router = express.Router();

router.get('/:userId/stats', getUserStats);
router.get('/:userId/profile', getUserProfile);

// router.patch('/:userId/stats', getUserStats);
