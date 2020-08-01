const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
// const { isAuth } = require('../middleware/isAuth');

/* GET all questions */
router.get('/', questionController.getQuestions);

/* POST create a question */
router.post('/create', questionController.create);

module.exports = router;
