import express from 'express';
import * as discordController from '../controllers/discordController';

const router = express.Router();

/* GET */

router.get('/', (req, res, next) => res.json({ route: 'discord' }));

router.get('/url', discordController.getUrl);

/* POST */

router.post('/signup', discordController.authenticateUser);

export default router;
