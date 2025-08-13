import express from 'express';

export const router = express.Router();

router.get('users/:userId/stats');
