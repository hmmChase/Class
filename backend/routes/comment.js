import express from 'express';
import * as commentController from '../controllers/commentController';
import { isAuth } from '../middleware/isAuth';
import { authRole } from '../middleware/authRole';

const router = express.Router();

/* GET */

router.get('/', function (req, res, next) {
  return res.json({ route: 'question' });
});

router.get('/all', commentController.getAllComments);

router.get('/:commentId', commentController.getComment);

router.get('/question/:questionId', commentController.getQuestionComments);

/* POST */

router.post('/create', commentController.create);

router.post('/delete-soft', commentController.deleteSoft);

router.post('/answer', isAuth, authRole('TEACHER'), commentController.answer);

export default router;
