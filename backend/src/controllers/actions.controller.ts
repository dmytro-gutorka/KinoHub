import { Request, Response } from 'express';
import { MediaType, UserAction } from '../types/types.js';
import { mediaUserActionsService } from '../services/actions.service.js';

export async function getAction(req: Request, res: Response): Promise<void> {
  const mediaId: number = Number(req.params.mediaId);
  const userId: number | undefined = req.user?.id;

  const userAction: UserAction = await mediaUserActionsService.read(userId, mediaId);

  res.status(200).json(userAction);
}

export async function createAction(
  req: Request<any, any, any, { media_type: MediaType }>,
  res: Response
): Promise<void> {
  const mediaId: number = Number(req.params.mediaId);
  const userId: number | undefined = req.user?.id;
  const mediaType: MediaType = req.query.media_type;

  const userAction: UserAction = await mediaUserActionsService.create(userId, mediaId, mediaType);

  res.status(201).json(userAction);
}

export async function updateAction(req: Request, res: Response): Promise<void> {
  const mediaId: number = Number(req.params.mediaId);
  const userId: number | undefined = req.user?.id;
  const action: UserAction = req.body;

  const userAction: UserAction | null = await mediaUserActionsService.update(
    userId,
    mediaId,
    action
  );

  res.status(200).json(userAction);
}
