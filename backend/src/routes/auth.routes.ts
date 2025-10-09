import {
  activateEmail,
  login,
  logout,
  refresh,
  register,
} from '../controllers/auth.controllers.js';
import { asyncHandler } from '../middleware/async-handler.middleware.js';
import { Router } from 'express';
import express from 'express';

export const router: Router = express.Router();
export const privateRoute: Router = express.Router();

privateRoute.post('/logout', asyncHandler(logout));
router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));
router.get('/refresh', asyncHandler(refresh));
router.get('/activate/:link', asyncHandler(activateEmail));
