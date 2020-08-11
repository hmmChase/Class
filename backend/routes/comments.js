const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
// const { isAuth } = require('../middleware/isAuth');

/* GET all questions */
router.get('/', commentController.getComments);

/* POST create a question */
router.post('/create', commentController.create);

module.exports = router;
