import { Response } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  userId: number;
}

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
        expiresIn: this.ACCESS_EXPIRES_IN,
      }),
      refreshToken: jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
        expiresIn: this.REFRESH_EXPIRES_IN,
      }),
    };
  }

  async validateAccessToken(accessToken: string) {
    return jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET!);
  }

  async validateRefreshToken(refreshToken: string) {
    return jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);
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
