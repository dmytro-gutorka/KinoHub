import { router as mediaRouter } from './mediaRoutes';
import { router as usersRouter } from './usersRoutes';
import { router as actionsRouter } from './actionsRoutes';

import express from 'express';

const router = express.Router();

router.use('/media', mediaRouter);
router.use('/users', usersRouter);
router.use('/actions', actionsRouter);

export default router;
