import { getUserStats } from '../controllers/users.controller.js';
import express from 'express';

export const router = express.Router();

router.get('/:userId/stats', getUserStats);
