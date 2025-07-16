import { authGuard } from '../middleware/auth.middleware.js';
import { router as mediaRouter } from './mediaRoutes.js';
import { router as actionsRouter } from './actionsRoutes.js';
import { router as authRouter } from './authRouter.js';
import { router as usersRouter } from './usersRoutes.js';

import express from 'express';

const privateRoutes = express.Router();
const publicRoutes = express.Router();

publicRoutes.use('/auth', authRouter);

privateRoutes.use(authGuard());
privateRoutes.use('/users', usersRouter);
privateRoutes.use('/media', mediaRouter);
privateRoutes.use('/actions', actionsRouter);

export { privateRoutes, publicRoutes };
