import { authGuard } from '../middleware/auth.middleware.js';
import { router as mediaRouter } from './media.routes';
import { router as actionsRouter } from './actions.routes';
import { router as authRouter } from './auth.routes';
import { router as usersRouter } from './user.routes';

import express from 'express';

const privateRoutes = express.Router();
const publicRoutes = express.Router();

publicRoutes.use('/auth', authRouter);

privateRoutes.use(authGuard());
privateRoutes.use('/users', usersRouter);
privateRoutes.use('/media', mediaRouter);
privateRoutes.use('/actions', actionsRouter);

export { privateRoutes, publicRoutes };
