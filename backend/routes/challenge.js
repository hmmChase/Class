import express from 'express';
import * as challengeController from '../controllers/challengeController';

const router = express.Router();

/* GET */

router.get('/', function (req, res, next) {
  return res.json({ route: 'question' });
});

router.get('/all', challengeController.getAllChallenges);

router.get('/:challengeId/', challengeController.getChallenge);

router.get('/path/:challengePath', challengeController.getChallengeByPath);

/* POST */

router.post('/create', challengeController.create);

export default router;
