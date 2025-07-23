import { Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { HttpError } from '../errors/HttpError.js';
import { JwtTokens } from '../types/types.js';

export class TokenService {
  private readonly ACCESS_EXPIRES_IN: number = 5 * 60 * 1000; // 15 minutes
  private readonly REFRESH_EXPIRES_IN: number = 365 * 24 * 60 * 60 * 1000; // 7 days 7 * 24 * 60 * 60 * 1000

  generateTokens(payload: JwtPayload): JwtTokens {
    return {
      accessToken: jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, {
        expiresIn: this.ACCESS_EXPIRES_IN,
      }),
      refreshToken: jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
        expiresIn: this.REFRESH_EXPIRES_IN,
      }),
    };
  }

  validateAccessToken(accessToken: string): JwtPayload {
    const payload: string | JwtPayload = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET!);

    if (typeof payload === 'string') throw HttpError.Unauthorized('Invalid access token');

    return payload;
  }

  validateRefreshToken(refreshToken: string): JwtPayload {
    const payload: string | JwtPayload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);

    if (typeof payload === 'string') throw HttpError.Unauthorized('Invalid refresh token');

    return payload;
  }

  setRefreshTokenToCookies(refreshToken: string, res: Response): void {
    res.cookie('refreshToken', refreshToken, {
      httpOnly: false, // true in prod
      secure: false, // true in production or use (process.env.NODE_ENV === 'production')
      maxAge: this.REFRESH_EXPIRES_IN,
    });
  }
}

export const tokenService = new TokenService();
