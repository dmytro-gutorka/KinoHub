import { Request, Response } from 'express';
import { usersService } from '../services/users.service.js';
import { UserListItemDTO, UserQueryDTO } from '../dto/users.dto.js';

export async function getUsers(req: Request<any, any, any, UserQueryDTO>, res: Response){
  const search  = req.query.search || ''
  const page = req.query.page || 1

  console.log('s' ,search)
  const users: UserListItemDTO[] = await usersService.getUsers(search, page);

  res.status(200).json(users)
}