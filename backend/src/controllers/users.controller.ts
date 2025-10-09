import { Request, Response } from 'express';
import { usersService } from '../services/users.service.js';
import { UserListItemDTO } from '../dto/users.dto.js';

export async function getUsers(req: Request, res: Response){
  const users: UserListItemDTO[] = await usersService.getUsers();

    res.status(200).json(users)
}