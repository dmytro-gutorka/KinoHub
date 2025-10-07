import { Router } from 'express';
import {
  acceptFriendRequest,
  cancelFriendRequest,
  createFriendRequest,
  rejectFriendRequest,
} from '../controllers/friends.controller.js';

export const router: Router = Router();

router.post('/requests', createFriendRequest);
// router.get('/requests/incoming');
// router.get('/requests/outcoming:');
router.post('/requests/:requestId/accept', acceptFriendRequest);
router.post('/requests/:requestId/reject', rejectFriendRequest);
router.post('/requests/:requestId/cancel', cancelFriendRequest);
//
// router.get('/');
// router.delete('/:userId');
