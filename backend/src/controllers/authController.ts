import { Request, Response } from 'express';
import { authService } from '../services/auth.service.js';
import { tokenService } from '../services/token.service.js';
import { Error } from 'sequelize';

export async function register(req: Request, res: Response) {
  try {
    const { username, password, email } = req.body;
    const tokens = await authService.register(email, password, username);

    tokenService.setRefreshTokenToCookies(tokens.refreshToken, res);
    res.status(201).json(tokens);
  } catch (error) {
    if (error instanceof Error) res.status(400).json({ error: error.message });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const tokens = await authService.login(email, password);

    tokenService.setRefreshTokenToCookies(tokens.refreshToken, res);
    res.status(200).json(tokens);
  } catch (error) {
    if (error instanceof Error) res.status(400).json({ error: error.message });
  }
}
