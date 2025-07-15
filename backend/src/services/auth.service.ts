import { userRepository } from '../repositories/userRepository.js';
import { userAuthRepository } from '../repositories/userAuthentication.js';
import { tokenService } from './token.service.js';
import { emailService } from './email.service.js';
import { v4 as uuid4 } from 'uuid';
import bcrypt from 'bcrypt';
import { JwtPayload } from 'jsonwebtoken';

export class AuthService {
  async register(email: string, password: string, username: string) {
    const isUser = await userRepository.existsBy({ email, username });

    if (isUser) throw new Error('User already exists');

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = userRepository.create({ password: hashedPassword, email, username });
    await userRepository.save(user);

    const tokens = tokenService.generateTokens({ userId: user.id });

    const userAuthData = userAuthRepository.create({
      activationLink: uuid4(),
      refreshToken: tokens.refreshToken,
      user: user,
    });

    await userAuthRepository.save(userAuthData);
    await emailService.sendEmailConfirmation(user.email, userAuthData.activationLink);

    return tokens;
  }

  async login(email: string, password: string) {
    const user = await userRepository.findOneBy({ email });

    if (!user) throw new Error('User does not exist');

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) throw new Error('Password does not match');

    return tokenService.generateTokens({ userId: user.id });
  }

  async logout(refreshToken: string) {
    await userAuthRepository.delete({ refreshToken });
  }

  async activateEmail(link: string) {
    const userAuth = await userAuthRepository.findOneBy({ activationLink: link });

    if (!userAuth) throw new Error('User does not exist');

    userAuth.isEmailConfirmed = true;
    await userAuth.save();
  }

  async refresh(oldRefreshToken: string) {
    if (!oldRefreshToken) throw new Error('No refresh token provided');

    const payload: JwtPayload = tokenService.validateRefreshToken(oldRefreshToken);
    const isTokenExist = await userAuthRepository.existsBy({ refreshToken: oldRefreshToken });

    if (!payload || !isTokenExist) throw new Error('Invalid refresh token');

    const userAuth = await userAuthRepository.findOneBy({ refreshToken: oldRefreshToken });

    if (!userAuth) throw new Error('User does not exist');

    const tokens = tokenService.generateTokens({ userId: payload.userId });
    userAuth.refreshToken = tokens.refreshToken;
    await userAuth.save();

    return tokens;
  }
}

export const authService = new AuthService();
