import express, { Router } from 'express';
import { cacheMedia } from '../controllers/media.controller.js';

export const router: Router = express.Router();

router.post('/:mediaId/cache', cacheMedia);
