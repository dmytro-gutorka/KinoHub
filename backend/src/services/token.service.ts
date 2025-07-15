import jwt from 'jsonwebtoken';
import {
  ACCESS_TOKEN_TIME_EXPIRATION,
  REFRESH_TOKEN_TIME_EXPIRATION,
} from '../utils/constants/JWT.js';

type JwtPayload = {
  userId: number;
};

export class TokenService {
  async generateTokens(payload: JwtPayload) {
    return {
      accessToken: jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, {
        expiresIn: ACCESS_TOKEN_TIME_EXPIRATION,
      }),
      refreshToken: jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
        expiresIn: REFRESH_TOKEN_TIME_EXPIRATION,
      }),
    };
  }

  async validateAccessToken(accessToken: string) {
    return jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET!);
  }

  async validateRefreshToken(refreshToken: string) {
    return jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);
  }
}
