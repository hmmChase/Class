const express = require('express');
const router = express.Router();
const challengeController = require('../controllers/challengeController');
const { isAuth } = require('../middleware/isAuth');

router.get('/', isAuth, challengeController.getChallenges);

module.exports = router;
