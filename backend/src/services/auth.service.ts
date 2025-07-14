import { userRepository } from '../repositories/userRepository.js';
import { comparePasswords, hashPassword } from '../utils/auth/password.js';
import { signAccessToken, signRefreshToken } from '../utils/auth/jwt.js';

export class AuthService {
  async register(email: string, password: string, username: string) {
    const isUser = userRepository.existsBy({ email });

    if (!isUser) throw new Error('User already exists');

    const hashedPassword = await hashPassword(password);
    const user = userRepository.create({ password: hashedPassword, email, username });
    await userRepository.save(user);
  }

  async login(email: string, password: string) {
    const user = await userRepository.findOneBy({ email });

    if (!user) {
      console.log('User does not exist');
      throw new Error('User does not exist');
    }

    const isPasswordMatch = await comparePasswords(password, user.password);

    if (!isPasswordMatch) {
      console.log('Password does not match');
      throw new Error('Password does not match');
    }

    const payload = {
      userId: user.id,
    };

    return {
      accessToken: signAccessToken(payload),
      refreshToken: signRefreshToken(payload),
    };
  }
}

export const authService = new AuthService();
