import express, { Router } from 'express';
import {
  createEpisodeList,
  getEpisodeList,
  updateEpisode,
} from '../controllers/episodes.controller.js';

export const router: Router = express.Router();

router.get('/:tvShowId/season/:season', getEpisodeList);
router.post('/:tvShowId/season/:season', createEpisodeList);

router.patch('/:tvShowId/season/:season/episode/:episode', updateEpisode);
