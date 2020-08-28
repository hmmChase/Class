import express from 'express';
import * as challengeController from '../controllers/challengeController';

const router = express.Router();

router.get('/', (req, res, next) => res.json({ route: 'challenge' }));

router.get('/:challengePath', challengeController.getChallenge);

router.get('/:challengePath/q', challengeController.getChallengeQuestions);

router.post('/create', challengeController.create);

// router.get(
//   '/:challengePath/q/:questionId',
//   challengeController.getChallengeQuestion
// );

export default router;
