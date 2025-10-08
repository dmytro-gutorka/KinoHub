import { userRepository } from '../config/repositories.js';

class UsersService {
  async getUsers() {
    return await userRepository.find()
  }
}


export const usersService = new UsersService();