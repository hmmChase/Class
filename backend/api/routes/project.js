import express from 'express';
import * as projectController from '../controllers/projectController.js';

const router = express.Router();

/* GET */

router.get('/', (req, res, next) => res.json({ route: 'project' }));

router.get('/all', projectController.getAllProjects);

router.get('/challenge/:challengePath', projectController.getChallengeProjects);

/* POST */

router.post('/create', projectController.create);

export default router;
