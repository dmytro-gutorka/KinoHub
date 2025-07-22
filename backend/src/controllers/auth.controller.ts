import { Request, Response } from 'express';
import { authService } from '../services/auth.service.js';
import { tokenService } from '../services/token.service.js';

export async function register(req: Request, res: Response) {
  const { username, password, email } = req.body;

  await authService.register(email, password, username);

  res
    .status(201)
    .json({ message: 'User has been created. Please check your email for activation link' });
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const { tokens, userData } = await authService.login(email, password);

  tokenService.setRefreshTokenToCookies(tokens.refreshToken, res);

  res.status(200).json({ accessToken: tokens.accessToken, userData });
}

export async function logout(req: Request, res: Response) {
  const { refreshToken } = req.cookies;

  await authService.logout(refreshToken);

  res.clearCookie('refreshToken');
  res.json({ message: 'Refresh token has been deleted' });
}

export async function activateEmail(req: Request, res: Response) {
  const { link: activationLink } = req.params;

  await authService.activateEmail(activationLink);

  res.status(301).redirect('/');
}

export async function refresh(req: Request, res: Response) {
  const { refreshToken } = req.cookies;
  const newTokens = await authService.refresh(refreshToken);

  tokenService.setRefreshTokenToCookies(newTokens.refreshToken, res);
  res.status(200).json({ accessToken: newTokens.accessToken });
}
