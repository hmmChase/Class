import express from 'express';
import * as projectController from '../controllers/projectController';

const router = express.Router();

/* GET */

router.get('/', (req, res, next) => res.json({ route: 'project' }));

router.get('/all', projectController.getAllProjects);

/* POST */

router.post('/create', projectController.create);

export default router;
