import { createMedia, getMedia, updateMedia } from '../controllers/media.controller.js';
import express, { Router } from 'express';

export const router: Router = express.Router();

router.get('/:mediaId/', getMedia);
router.post('/:mediaId', createMedia);
router.put('/:mediaId', updateMedia);

router.get('/:mediaId/comments', getMedia);
router.post('/:mediaId/comments', getMedia);

router.put('/:mediaId/comments/:commentId', getMedia);
router.delete('/:mediaId/comments/:commentId', getMedia);

router.post('/:mediaId/comments/:commentId/vote', getMedia);
router.patch('/:mediaId/comments/:commentId/vote', getMedia);
