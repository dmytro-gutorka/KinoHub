import { router as mediaRouters } from "./media.js";
import { router as userRouters } from "./users.js";

import express from "express";

const router = express.Router();

router.use('/media', mediaRouters);
router.use('/users', userRouters)


export default router