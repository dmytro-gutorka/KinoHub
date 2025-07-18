import { Response, NextFunction, Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { tokenService } from '../services/token.service.js';
import { HttpError } from '../errors/HttpError.js';

export function authGuard() {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) throw HttpError.Unauthorized('You need to be logged in to access this resource');

    const payload: JwtPayload = tokenService.validateAccessToken(token);

    req.user = { id: payload.userId };
    next();
  };
}
