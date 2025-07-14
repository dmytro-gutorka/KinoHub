import { userRepository } from '../../repositories/userRepository.js';
import { hashPassword } from '../../utils/auth/password.js';

export class AuthService {
  async register(email: string, password: string, username: string) {
    const isUser = userRepository.existsBy({ email });

    if (!isUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await hashPassword(password);
    const user = userRepository.create({ password: hashedPassword, email, username });
    await userRepository.save(user);
  }
}
