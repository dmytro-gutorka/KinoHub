import express, { Router } from 'express';
import { updateMediaActions } from '../controllers/actionsСontroller';

export const router: Router = express.Router();

router.patch('/:mediaId', updateMediaActions);
