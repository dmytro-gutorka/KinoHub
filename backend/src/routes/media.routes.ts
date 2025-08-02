import { createMedia, getMedia, updateMedia } from '../controllers/media.controller.js';
import express, { Router } from 'express';

export const router: Router = express.Router();

router.get('/:mediaId/', getMedia);
router.post('/:mediaId', createMedia);
router.put('/:mediaId', updateMedia);
