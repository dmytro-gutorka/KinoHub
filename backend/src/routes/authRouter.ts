import express from 'express';
import { activateEmail, login, logout, refresh, register } from '../controllers/authController.js';
import { authGuard } from '../middleware/auth.middleware.js';
import { Router } from 'express';

export const router: Router = express.Router();

router.post('/register', register);
router.post('/login', authGuard(), login);
router.post('/logout', logout);
router.get('/refresh', refresh);
router.get('/activate/:link', activateEmail);
