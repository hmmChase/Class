const express = require('express');
const router = express.Router();
const replyController = require('../controllers/replyController');
// const { isAuth } = require('../middleware/isAuth');

/* GET all questions */
router.get('/', replyController.getReplies);

/* POST create a question */
router.post('/create', replyController.create);

module.exports = router;
