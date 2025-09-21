import express, { Router } from 'express';
import {
  createEpisode,
  createEpisodeList,
  getEpisodeList,
  updateEpisode,
} from '../controllers/episodes.controller.js';

export const router: Router = express.Router();

router.get('/:tvShowId/seasons/:season', getEpisodeList);
router.post('/:tvShowId/seasons/:season', createEpisodeList);
router.post('/:tvShowId/seasons/:season', createEpisode);

router.patch('/:tvShowId/seasons/:season/episodes/:episode', updateEpisode);

// TODO: 1111
// change enpoints to media/:mediaId/season/:seasonId/episode/:episodeId