import {
  getUserMediaAction,
  createUserMediaAction,
  updateUserMediaAction,
  getUserMediaActionListByUserId,
} from '../controllers/actions.controller.js';
import express, { Router } from 'express';

export const router: Router = express.Router();

router.get('/:mediaId', getUserMediaAction);
router.post('/:mediaId', createUserMediaAction);
router.patch('/:mediaId', updateUserMediaAction);

// router.get('/', getUserMediaActionListByUserId);
