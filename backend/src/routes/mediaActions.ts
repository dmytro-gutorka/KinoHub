import express, { Request, Response, Router } from 'express';
import { MediaUserActions, WatchStatus } from '../entity/MediaUserActions.js';
import { MediaInfo } from '../entity/MediaInfo.js';

import { AppDataSource } from '../config/db.js';

const actionsRepository = AppDataSource.getRepository(MediaUserActions);
const mediaInfoRepository = AppDataSource.getRepository(MediaInfo);

export const router: Router = express.Router();

router.get('/media', async (req: Request, res: Response) => {
  const mediaInfo = mediaInfoRepository.create({
    mediaId: 4,
    runtime: 100,
    rating: 4,
    releaseDate: '10/05/2000',
    title: 'Movie title',
    posterPath: 'poster.jpg',
    voteAverage: 24,
    mediaType: 'tv',
  });

  const info = await mediaInfoRepository.save(mediaInfo);

  const actions = actionsRepository.create({
    userId: 1,
    isLiked: true,
    isWatched: true,
    watchStatus: WatchStatus.ToWatch,
    mediaInfo: info,
  });

  await actionsRepository.save(actions);

  const createdEntiry = await actionsRepository.findBy({ userId: 1 });
  console.log(createdEntiry);
  res.status(200).json({ message: 'ok' });
});
