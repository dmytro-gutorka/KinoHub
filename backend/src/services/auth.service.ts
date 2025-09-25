import { JwtTokens, LoginResponse, RefreshResponse } from '../types/types.js';
import { JwtPayload } from 'jsonwebtoken';
import { authRepository, userRepository } from '../config/repositories.js';
import { tokenService } from './token.service.js';
import { HttpError } from '../errors/HttpError.js';
import { UserAuth } from '../entity/UserAuth.js';
import { User } from '../entity/User.js';
import { v4 as uuid4 } from 'uuid';
import bcrypt from 'bcrypt';

export class AuthService {
  async register(
    email: string,
    password: string,
    username: string,
    firstName: string,
    lastName: string
  ): Promise<User> {
    const isUser: boolean = await userRepository.existsBy({ email, username });
    if (isUser) throw HttpError.Conflict('User already exist');

    const hashedPassword: string = await bcrypt.hash(password, 10);
    const user: User = userRepository.create({
      passwordHash: hashedPassword,
      email,
      username,
      profile: { firstName, lastName },
    });

    await userRepository.save(user);

    const userAuthData: UserAuth = authRepository.create({
      activationLink: uuid4(),
      user: user,
    });

    await authRepository.save(userAuthData);
    // await emailService.sendEmailConfirmation(user.email, userAuthData.activationLink); // error on client ??

    return (await userRepository.findOneBy({ email })) as User;
  }

  async login(email: string, password: string): Promise<LoginResponse> {
    const user: Pick<User, 'passwordHash' | 'id' | 'username' | 'userAuth'> | null =
      await userRepository.findOne({
        where: { email },
        select: ['passwordHash', 'id', 'username'],
      });
    if (!user) throw HttpError.NotFound('User does not exist');

    const isPasswordMatch: boolean = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordMatch) throw HttpError.Unauthorized('Invalid password');

    const tokens: JwtTokens = tokenService.generateTokens({ userId: user.id });

    if (user.userAuth) {
      user.userAuth.refreshToken = tokens.refreshToken;
      await user.userAuth.save();
    }

    if (!user.userAuth) {
      authRepository.create({
        activationLink: uuid4(),
        refreshToken: tokens.refreshToken,
        user: user,
      });
    }

    return { tokens, data: { email, username: user.username } };
  }

  async logout(userId: number): Promise<void> {
    const user: User | null = await userRepository.findOneBy({ id: userId });

    if (!user) throw HttpError.NotFound('User does not exist');

    user.userAuth.refreshToken = null;
    await user.userAuth.save();
  }

  async activateEmail(link: string): Promise<void> {
    const userAuth: UserAuth | null = await authRepository.findOneBy({ activationLink: link });
    if (!userAuth) throw HttpError.NotFound('User does not exist');

    userAuth.isEmailConfirmed = true;
    await userAuth.save();
  }

  async refresh(oldRefreshToken: string): Promise<RefreshResponse> {
    if (!oldRefreshToken) throw HttpError.Unauthorized('No refresh token provided');

    const payload: JwtPayload = tokenService.validateRefreshToken(oldRefreshToken);
    const isToken: boolean = await authRepository.existsBy({ refreshToken: oldRefreshToken });

    if (!payload) throw HttpError.Unauthorized('Invalid refresh token');
    if (!isToken) throw HttpError.NotFound('Such refresh token does not exist');

    const userAuth: UserAuth | null = await authRepository.findOne({
      where: { refreshToken: oldRefreshToken },
      relations: ['user'],
    });
    if (!userAuth) throw HttpError.NotFound('User does not exist');

    const tokens: JwtTokens = tokenService.generateTokens({ userId: payload.userId });

    userAuth.refreshToken = tokens.refreshToken;
    await userAuth.save();

    return {
      tokens,
      data: { id: userAuth.user.id, email: userAuth.user.email, username: userAuth.user.username },
    };
  }
}

export const authService = new AuthService();
