import express from 'express';
import * as commentController from '../controllers/commentController';
import { isAuth } from '../middleware/isAuth';
import authRole from '../middleware/authRole';

const router = express.Router();

/* GET */

router.get('/', (req, res, next) => res.json({ route: 'question' }));

router.get('/all', commentController.getAllComments);

router.get('/:commentId', commentController.getComment);

router.get('/question/:questionId', commentController.getQuestionComments);

/* POST */

router.post('/create', commentController.create);

router.post('/delete-soft', commentController.deleteSoft);

router.post(
  '/answer-promote',
  isAuth,
  authRole('TEACHER'),
  commentController.answerPromote
);

router.post(
  '/answer-demote',
  isAuth,
  authRole('TEACHER'),
  commentController.answerDemote
);

export default router;
