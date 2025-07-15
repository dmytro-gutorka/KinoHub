import { userRepository } from '../repositories/userRepository.js';
import { userAuthRepository } from '../repositories/userAuthentication.js';
import { tokenService } from './token.service.js';
import { emailService } from './email.service.js';
import { v4 as uuid4 } from 'uuid';
import bcrypt from 'bcrypt';

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
}

export const authService = new AuthService();
