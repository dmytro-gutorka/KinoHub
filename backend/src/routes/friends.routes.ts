import { Router } from 'express';
import { acceptFriendRequest, createFriendRequest } from '../controllers/friends.controller.js';

export const router: Router = Router();

router.post('/requests', createFriendRequest);
// router.get('/requests/incoming');
// router.get('/requests/outcoming:');
router.post('/requests/:requestId/accept', acceptFriendRequest);
// router.post('/requests/:requestId/reject');
// router.post('/requests/:requestId/cancel');
//
// router.get('/');
// router.delete('/:userId');
