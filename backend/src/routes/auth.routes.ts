import { activateEmail, login, logout, refresh, register } from '../controllers/auth.controller.js';
import { asyncHandler } from '../middleware/async-handler.middleware.js';
import { Router } from 'express';
import express from 'express';

export const router: Router = express.Router();

router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));
router.post('/logout', asyncHandler(logout));
router.get('/refresh', asyncHandler(refresh));
router.get('/activate/:link', asyncHandler(activateEmail));
