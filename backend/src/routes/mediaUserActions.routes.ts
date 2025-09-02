import {
  getUserMediaAction,
  createUserMediaAction,
  updateUserMediaAction,
  getMovieBoardItems,
} from '../controllers/mediaUserActions.controller.js';
import express, { Router } from 'express';

export const router: Router = express.Router();

router.get('/movie-board', getMovieBoardItems);

router.get('/:mediaId', getUserMediaAction);
router.post('/:mediaId', createUserMediaAction);
router.patch('/:mediaId', updateUserMediaAction);
