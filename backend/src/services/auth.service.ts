import { JwtPayload } from 'jsonwebtoken';
import { userRepository } from '../repositories/user.repository.js';
import { authRepository } from '../repositories/auth.repository.js';
import { tokenService } from './token.service.js';
import { emailService } from './email.service.js';
import { HttpError } from '../errors/HttpError.js';
import { v4 as uuid4 } from 'uuid';
import bcrypt from 'bcrypt';

export class AuthService {
  async register(email: string, password: string, username: string) {
    const isUser = await userRepository.existsBy({ email, username });
    if (isUser) throw HttpError.Conflict('User already exist');

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = userRepository.create({ password: hashedPassword, email, username });
    await userRepository.save(user);

    const tokens = tokenService.generateTokens({ userId: user.id });

    const userAuthData = authRepository.create({
      activationLink: uuid4(),
      refreshToken: tokens.refreshToken,
      user: user,
    });

    await authRepository.save(userAuthData);
    await emailService.sendEmailConfirmation(user.email, userAuthData.activationLink);

    return tokens;
  }

  async login(email: string, password: string) {
    const user = await userRepository.findOneBy({ email });
    if (!user) throw HttpError.NotFound('User does not exist');

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) throw HttpError.Unauthorized('Invalid password');

    return tokenService.generateTokens({ userId: user.id });
  }

  async logout(refreshToken: string) {
    await authRepository.delete({ refreshToken });
  }

  async activateEmail(link: string) {
    const userAuth = await authRepository.findOneBy({ activationLink: link });
    if (!userAuth) throw HttpError.NotFound('User does not exist');

    userAuth.isEmailConfirmed = true;

    await userAuth.save();
  }

  async refresh(oldRefreshToken: string) {
    if (!oldRefreshToken) throw HttpError.Unauthorized('No refresh token provided');

    const payload: JwtPayload = tokenService.validateRefreshToken(oldRefreshToken);
    const isTokenExist = await authRepository.existsBy({ refreshToken: oldRefreshToken });
    if (!payload || !isTokenExist) throw HttpError.Unauthorized('Invalid refresh token');

    const userAuth = await authRepository.findOneBy({ refreshToken: oldRefreshToken });
    if (!userAuth) throw HttpError.NotFound('User does not exist');

    const tokens = tokenService.generateTokens({ userId: payload.userId });
    userAuth.refreshToken = tokens.refreshToken;

    await userAuth.save();
    return tokens;
  }
}

export const authService = new AuthService();
