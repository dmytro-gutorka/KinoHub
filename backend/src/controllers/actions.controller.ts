import { Request, Response } from 'express';
import { UserAction } from '../types/types.js';
import { mediaServices } from '../services/index.js';
import { mediaUserActionsService } from '../services/actions.service.js';
import { HttpError } from '../errors/HttpError.js';

export async function getAction(req: Request, res: Response) {
  const mediaId: number = Number(req.params.mediaId);
  const userId: number | undefined = req.user?.id;

  if (!userId) throw HttpError.Unauthorized('You need to be logged in to update user action');

  const userAction: UserAction = await mediaUserActionsService.read(userId, mediaId);

  res.status(200).json({ data: userAction });
}

export async function getOrCreateAction(req: Request, res: Response) {
  const mediaId: number = Number(req.params.mediaId);
  const userId: number | undefined = req.user?.id;

  console.log(userId);
  console.log(mediaId);

  if (!userId) throw HttpError.Unauthorized('You need to be logged in to update user action');

  const userAction = await mediaUserActionsService.getOrCreate(userId, mediaId);

  res.status(201).json({ data: userAction });
}

export async function updateAction(req: Request, res: Response) {
  const mediaId: number = Number(req.params.mediaId);
  const userId: number | undefined = req.user?.id;
  const action: UserAction = req.body;

  if (!userId) throw HttpError.Unauthorized('You need to be logged in to update user action');

  await mediaServices.actions.update(userId, mediaId, action);

  res.status(200).json({ data: action });
}
