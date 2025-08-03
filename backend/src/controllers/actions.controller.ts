import { Request, Response } from 'express';
import { MediaType, UserAction } from '../types/types.js';
import { mediaUserActionsService } from '../services/actions.service.js';

export async function getUserMediaAction(
  req: Request<any, any, any, { media_type: MediaType }>,
  res: Response
): Promise<void> {
  const mediaId: number = Number(req.params.mediaId);
  const userId: number | undefined = req.user?.id;
  const mediaType: MediaType = req.query.media_type;

  const userAction: UserAction = await mediaUserActionsService.getOneBy(userId, mediaId, mediaType);

  res.status(200).json(userAction);
}

export async function createUserMediaAction(
  req: Request<any, any, any, { media_type: MediaType }>,
  res: Response
): Promise<void> {
  const mediaId: number = Number(req.params.mediaId);
  const userId: number | undefined = req.user?.id;
  const mediaType: MediaType = req.query.media_type;

  const userAction: UserAction = await mediaUserActionsService.create(userId, mediaId, mediaType);

  res.status(201).json(userAction);
}

export async function updateUserMediaAction(
  req: Request<any, any, any, { media_type: MediaType }>,
  res: Response
): Promise<void> {
  const mediaId: number = Number(req.params.mediaId);
  const userId: number | undefined = req.user?.id;
  const action: UserAction = req.body;
  const mediaType: MediaType = req.query.media_type;

  const userAction: UserAction | null = await mediaUserActionsService.update(
    userId,
    mediaId,
    mediaType,
    action
  );

  res.status(200).json(userAction);
}

export async function getMovieBoardItems(req: Request, res: Response) {
  const userId: number | undefined = req.user?.id;

  const userActions: Array<UserAction> = await mediaUserActionsService.getListBy(userId);

  res.status(200).json(userActions);
}
