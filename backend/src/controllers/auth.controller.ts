import { Request, Response } from 'express';
import { authService } from '../services/auth.service.js';
import { tokenService } from '../services/token.service.js';
import { User } from '../entity/User.js';

export async function register(req: Request, res: Response): Promise<void> {
  const { username, password, email, firstName, lastName } = req.body;

  const user: Partial<User> = await authService.register(
    email,
    password,
    username,
    firstName,
    lastName
  );

  res.status(201).json(user);
}

export async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;
  const { tokens, data } = await authService.login(email, password);

  tokenService.setRefreshTokenToCookies(tokens.refreshToken, res);

  res.cookie('refreshToken', tokens.refreshToken, {
    httpOnly: false,
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });

  res.status(200).json({ accessToken: tokens.accessToken, data });
}

export async function logout(req: Request, res: Response): Promise<void> {
  const userId = req.user?.id!;

  await authService.logout(userId);

  res.clearCookie('refreshToken');
  res.json({ message: 'Refresh token has been deleted' });
}

export async function activateEmail(req: Request, res: Response): Promise<void> {
  const { link: activationLink } = req.params;

  await authService.activateEmail(activationLink);

  res.status(301).redirect('/');
}

export async function refresh(req: Request, res: Response): Promise<void> {
  const { refreshToken } = req.cookies;
  const { tokens, data } = await authService.refresh(refreshToken);

  tokenService.setRefreshTokenToCookies(tokens.refreshToken, res);

  res.status(200).json({ accessToken: tokens.accessToken, data });
}
