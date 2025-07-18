import { Request, Response } from 'express';
import { UserAction } from '../types/types.js';
import { mediaUserActionsService } from '../services/actions.service.js';

export async function getAction(req: Request, res: Response) {
  const mediaId: number = Number(req.params.mediaId);
  const userId: number | undefined = req.user?.id;

  const userAction: UserAction = await mediaUserActionsService.read(userId, mediaId);

  res.status(200).json(userAction);
}

export async function getOrCreateAction(req: Request, res: Response) {
  const mediaId: number = Number(req.params.mediaId);
  const userId: number | undefined = req.user?.id;

  const userAction = await mediaUserActionsService.getOrCreate(userId, mediaId);

  res.status(201).json(userAction);
}

export async function updateAction(req: Request, res: Response) {
  const mediaId: number = Number(req.params.mediaId);
  const userId: number | undefined = req.user?.id;
  const action: UserAction = req.body;

  await mediaUserActionsService.update(userId, mediaId, action);

  res.status(200).json(action);
}
