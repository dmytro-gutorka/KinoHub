import { Request, Response } from 'express';
import { mediaServices } from '../services/media/index.js';

export async function updateActions(req: Request, res: Response) {
  const mediaId = Number(req.params.mediaId);
  const userId = 1;
  const action = req.body;

  try {
    await mediaServices.actions.update(mediaId, userId, action);
    res.status(201).send(action);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Internal server error' });
  }
}

// export async function getActions(req: Request, res: Response) {
//   const mediaId = Number(req.params.mediaId);
//   const userId = 1;
// }
