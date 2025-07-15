import { Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

// export interface JwtPayload {
//   userId: number;
// }

interface JwtTokens {
  accessToken: string;
  refreshToken: string;
}

export class TokenService {
  private readonly ACCESS_EXPIRES_IN = 15 * 60; // 15 minutes
  private readonly REFRESH_EXPIRES_IN = 7 * 24 * 60 * 60; // 7 days

  generateTokens(payload: JwtPayload): JwtTokens {
    return {
      accessToken: jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, {
        expiresIn: '15m', // this.ACCESS_EXPIRES_IN
      }),
      refreshToken: jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
        expiresIn: '7d', // this.REFRESH_EXPIRES_IN
      }),
    };
  }

  validateAccessToken(accessToken: string): JwtPayload {
    const data = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET!);

    if (typeof data === 'string') {
      throw new Error('Invalid token');
    }

    return data;
  }

  validateRefreshToken(refreshToken: string) {
    const data = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);

    if (typeof data === 'string') {
      throw new Error('Invalid token');
    }

    return data;
  }

  setRefreshTokenToCookies(refreshToken: string, res: Response): void {
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: false, // true in production (process.env.NODE_ENV === 'production')
      maxAge: this.REFRESH_EXPIRES_IN,
    });
  }
}

export const tokenService = new TokenService();
