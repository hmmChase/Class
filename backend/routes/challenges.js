import express from 'express';
import * as challengeController from '../controllers/challengeController';
import { isAuth } from '../middleware/isAuth';

const router = express.Router();

router.get('/', isAuth, challengeController.getChallenges);

export default router;
