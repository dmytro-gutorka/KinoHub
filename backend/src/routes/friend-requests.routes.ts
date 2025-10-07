import { Router } from 'express';
import {
  acceptFriendRequest,
  cancelFriendRequest,
  createFriendRequest, getIncomingFriendRequests, getOutcomingFriendRequests,
  rejectFriendRequest,
} from '../controllers/friend-requests.controller.js';

export const router: Router = Router();


router.post('/requests', createFriendRequest);

router.get('/requests/incoming', getIncomingFriendRequests);
router.get('/requests/outcoming:', getOutcomingFriendRequests);

router.post('/requests/:requestId/accept', acceptFriendRequest);
router.post('/requests/:requestId/reject', rejectFriendRequest);
router.post('/requests/:requestId/cancel', cancelFriendRequest);
