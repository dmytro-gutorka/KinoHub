import express, { Router } from 'express';
import { login, register } from '../controllers/authController.js';

export const router: Router = express.Router();

router.post('/login', login);
router.post('/register', register);
