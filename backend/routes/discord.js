import express from 'express';
import * as discordController from '../controllers/discordController';

const router = express.Router();

router.get('/', discordController.getDiscordUrl);

router.post('/signup', discordController.authenticateUserDiscord);

export default router;
