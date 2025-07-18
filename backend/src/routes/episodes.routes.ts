import express, { Router } from 'express';

export const router: Router = express.Router();

router.get('/:mediaId');
router.post('/:mediaId');
router.patch('/:mediaId');
