const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { isAuth } = require('../middleware/isAuth');
const { authRole } = require('../middleware/authRole');

router.get('/', isAuth, commentController.getComments);

router.post('/create', isAuth, commentController.create);

router.post('/answer', isAuth, authRole('TEACHER'), commentController.answer);

module.exports = router;
