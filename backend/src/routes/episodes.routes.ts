import express, { Router } from 'express';
import {
  createEpisode,
  createEpisodeList,
  getEpisodeList,
  getWatchedEpisodes,
  updateEpisode,
} from '../controllers/episodes.controller.js';

export const router: Router = express.Router();

router.get('/:tvShowId/seasons/:season/episodes', getEpisodeList);
router.get('/:tvShowId/seasons/episodes/watched', getWatchedEpisodes);

router.post('/:tvShowId/seasons/:season/episodes/bulk', createEpisodeList);
router.post('/:tvShowId/seasons/:season/episodes', createEpisode);

router.patch('/:tvShowId/seasons/:season/episodes/:episode', updateEpisode);
