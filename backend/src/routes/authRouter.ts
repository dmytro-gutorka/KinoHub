import express, { Router } from 'express';
import {
  emailConfirmation,
  login,
  logout,
  refresh,
  register,
} from '../controllers/authController.js';
import { authGuard } from '../middleware/auth.middleware.js';

export const router: Router = express.Router();

router.post('/register', register);
router.post('/login', authGuard(), login);
router.post('/logout', logout);
router.get('/refresh', refresh);
router.get('/activate/:link', emailConfirmation);
