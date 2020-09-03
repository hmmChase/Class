import express from 'express';
import * as projectController from '../controllers/projectController';

const router = express.Router();

/* GET */

router.get('/', function (req, res, next) {
  return res.json({ route: 'project' });
});

router.get('/all', projectController.getAllProjects);

/* POST */

router.post('/create', projectController.create);

export default router;
