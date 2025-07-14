import { router as usersRouter } from './usersRoutes.js';
import { router as mediaRouter } from './mediaRoutes.js';
import { router as actionsRouter } from './actionsRoutes.js';
import { router as authRouter } from './authRouter.js';

import express from 'express';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/media', mediaRouter);
router.use('/actions', actionsRouter);
router.use('/auth', authRouter);

export default router;
