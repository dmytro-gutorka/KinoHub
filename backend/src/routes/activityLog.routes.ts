import express from 'express';
import { Router } from 'express';
import { getActivityLog } from '../controllers/activityLog.controller.js';

export const router: Router = express.Router();

router.get('/', getActivityLog);
