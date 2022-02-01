import express from 'express';

import * as discordController from '../controllers/discordController.js';
// import { handleErrors } from '../handlers/errorHandler.js';

const router = express.Router();

/* GET */

router.get('/', (req, res, next) => res.json({ route: 'discord' }));

router.get('/url-signup', discordController.getSignupUrl);

router.get('/url-login', discordController.getLoginUrl);

/* POST */

router.post('/signup', discordController.signupDiscord);

router.post('/login', discordController.loginDiscord);

export default router;
