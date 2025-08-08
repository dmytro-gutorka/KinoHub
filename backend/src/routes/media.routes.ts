import { createMedia, getMedia, updateMedia } from '../controllers/media.controller.js';
import express, { Router } from 'express';
import {
  createComment,
  deleteComment,
  getCommentList,
  updateComment,
} from '../controllers/comments.controller.js';

export const router: Router = express.Router();

router.get('/:mediaId/', getMedia);
router.post('/:mediaId', createMedia);
router.put('/:mediaId', updateMedia);

router.get('/:mediaId/comments', getCommentList);
router.post('/:mediaId/comments', createComment);
router.put('/:mediaId/comments/:commentId', updateComment);
router.delete('/:mediaId/comments/:commentId', deleteComment);

// router.post('/:mediaId/comments/:commentId/vote', getMedia);
// router.patch('/:mediaId/comments/:commentId/vote', getMedia);
