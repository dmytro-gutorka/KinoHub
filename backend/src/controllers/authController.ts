import { Request, Response } from 'express';
import { authService } from '../services/auth.service.js';
import { Error } from 'sequelize';

export async function register(req: Request, res: Response) {
  try {
    const { username, password, email } = req.body;
    await authService.register(email, password, username);

    res.status(201).send({ message: `User ${username} was created` });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: String(error) });
    }
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const tokens = await authService.login(email, password);

    res
      .status(200)
      .cookie('refreshToken', tokens.refreshToken, {
        httpOnly: false, // true in production
        secure: false, // true in production (process.env.NODE_ENV === 'production')
        maxAge: 24 * 7 * 3600 * 1000,
      })
      .json({ accessToken: tokens.accessToken });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: String(error) });
    }
  }
}
