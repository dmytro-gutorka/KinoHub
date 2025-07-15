import { Request, Response, NextFunction } from 'express';

export function authGuard() {
  return (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.headers.authorization);

    next();
  };
}
