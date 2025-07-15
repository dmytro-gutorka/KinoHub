import { activateEmail, login, logout, refresh, register } from '../controllers/authController.js';
import { authGuard } from '../middleware/auth.middleware.js';
import { Router } from 'express';
import express from 'express';
import { asyncHandler } from '../middleware/asyncHandler.middleware.js';

export const router: Router = express.Router();

router.post('/register', asyncHandler(register));
router.post('/login', authGuard(), asyncHandler(login));
router.post('/logout', asyncHandler(logout));
router.get('/refresh', asyncHandler(refresh));
router.get('/activate/:link', asyncHandler(activateEmail));
