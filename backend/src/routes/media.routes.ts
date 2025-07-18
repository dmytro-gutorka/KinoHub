import { createMedia, readMedia, updateMedia } from '../controllers/media.controller.js';
import express, { Router } from 'express';

export const router: Router = express.Router();

router.get('/:mediaId', readMedia);
router.post('/:mediaId', createMedia);
router.put('/:mediaId', updateMedia);
