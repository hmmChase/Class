const express = require('express');
const router = express.Router();
const discordController = require('../controllers/discordController');

router.get('/', discordController.getDiscordUrl);

router.post('/signup', discordController.authenticateDiscordUser);

module.exports = router;
