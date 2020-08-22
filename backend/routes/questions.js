import express from 'express';
import * as questionController from '../controllers/questionController';
import { isAuth } from '../middleware/isAuth';

const router = express.Router();

router.get('/', isAuth, questionController.getQuestions);

router.get('/:questionId', questionController.getQuestion);

router.post('/create', questionController.create);

export default router;
