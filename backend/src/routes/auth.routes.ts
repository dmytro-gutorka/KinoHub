import { activateEmail, login, logout, refresh, register } from '../controllers/auth.controller';
import { asyncHandler } from '../middleware/asyncHandler.middleware.js';
import { Router } from 'express';
import express from 'express';

export const router: Router = express.Router();

router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));
router.post('/logout', asyncHandler(logout));
router.get('/refresh', asyncHandler(refresh));
router.get('/activate/:link', asyncHandler(activateEmail));
