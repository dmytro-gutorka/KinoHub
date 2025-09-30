import { Router } from 'express';

export const router: Router = Router();

router.post('/requests');
router.get('/requests/incoming');
router.get('/requests/outcoming:');
router.post('/requests/:requestId/accept');
router.post('/requests/:requestId/reject');
router.post('/requests/:requestId/cancel');

router.get('/');
router.delete('/:userId');
