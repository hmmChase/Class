import express from 'express';
import * as commentController from '../controllers/commentController';
import { isAuth } from '../middleware/isAuth';
import { authRole } from '../middleware/authRole';

const router = express.Router();

router.get('/:questionId', isAuth, commentController.getComments);

router.post('/create', isAuth, commentController.create);

router.post('/answer', isAuth, authRole('TEACHER'), commentController.answer);

export default router;
