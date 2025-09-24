import { router as usersRouter } from './user.routes.js';
import { router as mediaRouter } from './media.routes.js';
import { router as actionsRouter } from './mediaUserActions.routes.js';
import { router as authRouter, privateRoute } from './auth.routes.js';
import { router as episodesRouter } from './episodes.routes.js';
import { authGuard } from '../middleware/auth.middleware.js';

import express from 'express';

const privateRoutes = express.Router();
const publicRoutes = express.Router();

publicRoutes.use('/auth', authRouter);

privateRoutes.use(authGuard());
privateRoutes.use('/auth', privateRoute);
privateRoutes.use('/', episodesRouter);
privateRoutes.use('/media', mediaRouter);
privateRoutes.use('/actions', actionsRouter);
privateRoutes.use('/users', usersRouter);

export { privateRoutes, publicRoutes };
