import { Request, Response } from 'express';

export async function getUserStats(req: Request, res: Response) {
  const userId: number | undefined = req.user?.id;

  const userStats;

  res.status(200).json(userStats);
}
