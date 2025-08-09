import { createCommentVote, updateCommentVote } from '../controllers/commentVote.controller.js';
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
router.patch('/:mediaId/comments/:commentId', updateComment);
router.delete('/:mediaId/comments/:commentId', deleteComment);

router.post('/comments/:commentId/vote', createCommentVote);
router.patch('/comments/:commentId/vote', updateCommentVote);
