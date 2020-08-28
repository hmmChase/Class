import express from 'express';
import * as challengesController from '../controllers/challengesController';

const router = express.Router();

router.get('/', challengesController.getAllChallenges);

export default router;
