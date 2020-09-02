import express from 'express';
import * as questionController from '../controllers/questionController';

const router = express.Router();

router.get('/', (req, res, next) => {
  return res.json({ title: 'question' });
});

router.get('/:questionId', questionController.getQuestion);

router.post('/create', questionController.createQuestion);

router.post('/delete', questionController.deleteQuestion);

export default router;
