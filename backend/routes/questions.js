const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const { isAuth } = require('../middleware/isAuth');

router.get('/', isAuth, questionController.getQuestions);

router.get('/:questionId', questionController.getQuestion);

router.post('/create', questionController.create);

module.exports = router;
