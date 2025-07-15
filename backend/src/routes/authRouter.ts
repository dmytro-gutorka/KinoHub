import { activateEmail, login, logout, refresh, register } from '../controllers/authController.js';
import { authGuard } from '../middleware/auth.middleware.js';
import { Router } from 'express';
import express from 'express';
import { asyncHandler } from '../middleware/asyncHandler.middleware.js';

export const router: Router = express.Router();

router.post('/register', asyncHandler(register));
router.post('/login', authGuard(), login);
router.post('/logout', logout);
router.get('/refresh', refresh);
router.get('/activate/:link', activateEmail);
