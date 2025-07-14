import { Request, Response } from 'express';
import { mediaServices } from '../services/media/index.js';
import { Error } from 'sequelize';

export async function updateActions(req: Request, res: Response) {
  const mediaId = Number(req.params.mediaId);
  const userId = 1;
  const action = req.body;

  try {
    await mediaServices.actions.update(mediaId, userId, action);
    res.status(201).send(action);
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ error: error.message });
    else res.status(500).json({ error: String(error) });
  }
}

// export async function getActions(req: Request, res: Response) {
//   const mediaId = Number(req.params.mediaId);
//   const userId = 1;
// }
