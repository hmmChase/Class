import express from 'express';
import * as questionController from '../controllers/questionController';

const router = express.Router();

/* GET */

router.get('/', (req, res, next) => res.json({ route: 'question' }));

router.get('/all', questionController.getAllQuestions);

router.get('/:questionId', questionController.getQuestion);

router.get(
  '/challenge/:challengePath',
  questionController.getChallengeQuestions
);

/* POST */

router.post('/create/:challengePath', questionController.create);

router.post('/delete-soft', questionController.deleteSoft);

export default router;

/* PATCH */

// change to patch

router.post('/update', questionController.update);
