import express, { Router } from 'express';
import { createEpisodes, getEpisodes, updateEpisodes } from '../controllers/episodes.controller.js';

export const router: Router = express.Router();

router.get('/:mediaId/season/:season', getEpisodes);
router.post('/:mediaId/season/:season', createEpisodes);

router.patch('/:mediaId/season/:season/episode/:episode', updateEpisodes);
