import { Request, Response } from 'express';
import { authService } from '../services/auth.service.js';
import { tokenService } from '../services/token.service.js';
import { Error } from 'sequelize';

export async function register(req: Request, res: Response) {
  try {
    const { username, password, email } = req.body;
    const tokens = await authService.register(email, password, username);

    tokenService.setRefreshTokenToCookies(tokens.refreshToken, res);

    res.status(200).json({ accessToken: tokens.accessToken });
  } catch (error) {
    if (error instanceof Error) res.status(400).json({ error: error.message });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const tokens = await authService.login(email, password);

    tokenService.setRefreshTokenToCookies(tokens.refreshToken, res);

    res.status(200).json({ accessToken: tokens.accessToken });
  } catch (error) {
    if (error instanceof Error) res.status(400).json({ error: error.message });
  }
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

  res.redirect('/');
}

export async function refresh(req: Request, res: Response) {
  const { refreshToken } = req.cookies;

  const newTokens = await authService.refresh(refreshToken);

  tokenService.setRefreshTokenToCookies(newTokens.refreshToken, res);

  res.status(200).json({ accessToken: newTokens.accessToken });
}
