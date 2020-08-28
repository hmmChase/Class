import express from 'express';
import * as questionsController from '../controllers/questionsController';
// import { isAuth } from '../middleware/isAuth';

const router = express.Router();

router.get('/', questionsController.getAllQuestions);

router.get('/:challengeId', questionsController.getChallengeQuestions);

export default router;
