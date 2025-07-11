import { router as routerActions } from './mediaActions.js';
import { router as userRouter } from './users.js';

import express from 'express';

const router = express.Router();

router.use('/media', routerActions);
router.use('/users', userRouter);

export default router;
