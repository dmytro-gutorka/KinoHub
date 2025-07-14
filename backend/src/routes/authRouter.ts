import express, { Router } from 'express';
import { login, register } from '../controllers/authController.js';
import { authGuard } from '../middleware/auth.middleware.js';

export const router: Router = express.Router();

router.post('/login', authGuard(), login);
router.post('/register', authGuard(), register);
