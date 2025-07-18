import express, { Router } from 'express';
import { createEpisodes } from '../controllers/episodes.controller.js';

export const router: Router = express.Router();

// router.get('/:mediaId');
router.post('/:mediaId', createEpisodes);
// router.patch('/:mediaId');
