import { Request, Response } from 'express';
import { HttpError } from '../errors/HttpError.js';

export function errorHandler(err: any, req: Request, res: Response) {
  if (err instanceof HttpError) {
    res.status(err.status).json({ error: err.message });
  } else {
    res.status(500).json({ error: 'Internal server error' });
  }
}
