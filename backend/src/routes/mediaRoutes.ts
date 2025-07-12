import express, { Router } from 'express';
import { cacheMedia } from '../controllers/mediaСontroller';

export const router: Router = express.Router();

router.post('/:mediaId/cache', cacheMedia);
