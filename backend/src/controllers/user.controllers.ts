import { Request, Response } from 'express';
import { usersService } from '../services/user.service.js';
// eslint-disable-next-line n/no-extraneous-import
import { UserListItemDTO, UserQueryDTO } from '@kinohub/schemas';

export async function getUsers(req: Request<any, any, any, UserQueryDTO>, res: Response) {
  const search = req.query.search || '';
  const page = req.query.page || 1;
  const userId = req.user?.id!;

  const users: UserListItemDTO[] = await usersService.getUsers(userId, search, page);

  res.status(200).json(users);
}
