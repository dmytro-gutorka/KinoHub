import { updateMediaActions } from '../controllers/actionsСontroller.js';
import express, { Router } from 'express';

export const router: Router = express.Router();

router.patch('/:mediaId', updateMediaActions);
