import { Router } from 'express';
import {
  acceptFriendRequest,
  cancelFriendRequest,
  createFriendRequest,
  getIncomingFriendRequests,
  getOutcomingFriendRequests,
  rejectFriendRequest,
} from '../controllers/friend-request.controllers.js';

export const router: Router = Router();

router.get('/incoming', getIncomingFriendRequests);
router.get('/outcoming', getOutcomingFriendRequests);

router.post('/', createFriendRequest);

router.post('/:requestId/accept', acceptFriendRequest);
router.post('/:requestId/reject', rejectFriendRequest);
router.post('/:requestId/cancel', cancelFriendRequest);
