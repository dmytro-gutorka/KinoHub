import { createAction, getAction, updateAction } from '../controllers/actions.controller.js';
import express, { Router } from 'express';

export const router: Router = express.Router();

router.get('/:mediaId', getAction);
router.post('/:mediaId', createAction);
router.patch('/:mediaId', updateAction);
