import { cacheMedia } from '../controllers/media.controller.js';
import express, { Router } from 'express';

export const router: Router = express.Router();

router.get('/:mediaId', cacheMedia);
