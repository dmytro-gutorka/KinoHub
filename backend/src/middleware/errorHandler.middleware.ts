import { Request, Response } from 'express';

export function errorHandler(err: any, req: Request, res: Response) {
  const status = err.status || 500;

  res.status(status).json({ error: err.message || 'Internal Server Error' });
}
