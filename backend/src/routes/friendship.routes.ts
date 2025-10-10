import express, { Router } from 'express';
import {
  deleteFriend,
  getFriends,
  getMutualFriends,
} from '../controllers/friendship.controllers.js';

export const router: Router = express.Router();

router.get('/:id/mutual', getMutualFriends);

router.get('/', getFriends);
router.delete('/:id', deleteFriend);
