const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const { isAuth } = require('../middleware/isAuth');

/* GET all users */
router.get('/', userController.getUsers);

/* POST create a user */
router.post('/signup', userController.signup);

/* POST authenticate a user */
router.post('/login', userController.login);

// POST /users/reset-password
router.post('/reset-password', userController.generatePasswordReset);

// POST /users/reset-password/:token
router.post('/reset-password/:token', userController.resetPassword);

module.exports = router;
