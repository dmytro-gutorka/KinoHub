import { createCommentVote, updateCommentVote } from '../controllers/comment-vote.controllers.js';
import { createMedia, getMedia, updateMedia } from '../controllers/media.controllers.js';
import express, { Router } from 'express';
import {
  createComment,
  deleteComment,
  getCommentList,
  updateComment,
} from '../controllers/comment.controllers.js';

export const router: Router = express.Router();

router.get('/:mediaId/', getMedia);
router.post('/:mediaId', createMedia);
router.put('/:mediaId', updateMedia);

router.get('/:mediaId/comments', getCommentList);
router.post('/:mediaId/comments', createComment);

router.patch('/comments/:commentId', updateComment); // TODO: may be add back :mediaId for semantic reasons
router.delete('/comments/:commentId', deleteComment); // TODO: may be add back :mediaId for semantic reasons

router.post('/comments/:commentId/vote', createCommentVote);
router.patch('/comments/:commentId/vote', updateCommentVote);
