import { Request, Response } from 'express';
import { usersService } from '../services/users.service.js';

export async function getUsers(req: Request, res: Response){
  const users = await usersService.getUsers();

    res.status(200).json(users)
}