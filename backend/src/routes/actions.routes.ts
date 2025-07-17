import { getAction, getOrCreateAction, updateAction } from '../controllers/actions.controller.js';
import express, { Router } from 'express';

export const router: Router = express.Router();

router.get('/:mediaId', getAction);
router.put('/:mediaId', getOrCreateAction);
router.patch('/:mediaId', updateAction);
