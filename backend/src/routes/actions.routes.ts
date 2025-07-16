import { updateActions } from '../controllers/actions.controller.js';
import express, { Router } from 'express';

export const router: Router = express.Router();

router.patch('/:mediaId', updateActions);
