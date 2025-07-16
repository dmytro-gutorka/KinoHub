import { cacheMedia } from '../controllers/media.controller.js';
import express, { Router } from 'express';

export const router: Router = express.Router();

router.post('/:mediaId/cache', cacheMedia);
