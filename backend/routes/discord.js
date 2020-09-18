import express from 'express';
import * as discordController from '../controllers/discordController';
import { asyncErrorWrapper } from '../handlers/errorHandlers';

const router = express.Router();

/* GET */

router.get('/', (req, res, next) => res.json({ route: 'discord' }));

router.get('/url-signup', discordController.getSignupUrl);

router.get('/url-login', discordController.getLoginUrl);

/* POST */

router.post('/signup', asyncErrorWrapper(discordController.signupDiscord));

router.post('/login', asyncErrorWrapper(discordController.loginDiscord));

export default router;
