import express from 'express';
import * as challengeController from '../controllers/challengeController';

const router = express.Router();

/* GET */

router.get('/', (req, res, next) => res.json({ route: 'question' }));

router.get('/all', challengeController.getAllChallenges);

router.get('/path/:challengePath', challengeController.getChallengeByPath);

/* POST */

router.post('/create', challengeController.create);

export default router;
