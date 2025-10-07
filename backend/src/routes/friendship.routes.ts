import express, { Router } from 'express';
import { getFriends } from '../controllers/friendship.controller.js';


export const router: Router = express.Router();


router.get('/', getFriends);
// router.delete('/:userId');