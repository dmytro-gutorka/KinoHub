import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_TIME_EXPIRATION, REFRESH_TOKEN_TIME_EXPIRATION } from '../constants/JWT.js';

export function signAccessToken(payload: object) {
  return jwt.sign(payload, process.env.JWT_ACCESS_TOKEN!, {
    expiresIn: ACCESS_TOKEN_TIME_EXPIRATION,
  });
}

export function signRefreshToken(payload: object) {
  return jwt.sign(payload, process.env.JWT_REFRESH_TOKEN!, {
    expiresIn: REFRESH_TOKEN_TIME_EXPIRATION,
  });
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, process.env.JWT_ACCESS_TOKEN!);
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, process.env.JWT_REFRESH_TOKEN!);
}
