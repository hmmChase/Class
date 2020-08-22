import express from 'express';
import * as projectController from '../controllers/projectController';
import { isAuth } from '../middleware/isAuth';

const router = express.Router();

router.get('/', isAuth, projectController.getProjects);

router.post('/create', projectController.create);

export default router;
