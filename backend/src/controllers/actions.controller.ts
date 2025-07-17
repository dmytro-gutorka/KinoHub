import { Request, Response } from 'express';
import { UserAction } from '../types/types.js';
import { mediaServices } from '../services/index.js';
import { mediaUserActionsService } from '../services/actions.service.js';

export async function getAction(req: Request, res: Response) {
  const mediaId = Number(req.params.mediaId);
  const userId = req.user?.id;

  const userAction: UserAction = await mediaUserActionsService.read(userId, mediaId);

  res.status(200).json({ data: userAction });
}

export async function createAction(req: Request, res: Response) {
  const mediaId = Number(req.params.mediaId);
  const userId = req.user?.id;
  const action = req.body;

  const userAction = await mediaUserActionsService.create(userId, mediaId, action);

  res.status(201).json({ data: userAction });
}

export async function updateAction(req: Request, res: Response) {
  const mediaId = Number(req.params.mediaId);
  const userId = req.user?.id;
  const action = req.body;

  await mediaServices.actions.update(userId, mediaId, action);

  res.status(200).json({ data: action });
}
