import express from 'express';
import * as challengeController from '../controllers/challengeController.js';

const router = express.Router();

/* GET */

router.get('/', (req, res, next) => res.json({ route: 'question' }));

router.get('/all', challengeController.getAllChallenges);

router.get('/path/:challengePath', challengeController.getChallenge);

/* POST */

router.post('/create', challengeController.create);

export default router;
