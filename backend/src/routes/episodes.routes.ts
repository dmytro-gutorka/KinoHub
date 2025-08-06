import express, { Router } from 'express';
import {
  createEpisodeList,
  getEpisodeList,
  updateEpisode,
} from '../controllers/episodes.controller.js';

export const router: Router = express.Router();

router.get('/:mediaId/season/:season', getEpisodeList);
router.post('/:mediaId/season/:season', createEpisodeList);

router.patch('/:mediaId/season/:season/episode/:episode', updateEpisode);
