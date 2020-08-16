const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const { isAuth } = require('../middleware/isAuth');

/* GET all users */
router.get('/', userController.getUsers);

/* GET login with Access token */
router.get('/login-token', userController.loginByToken);

/* POST create a user */
router.post('/signup', userController.signupByEmail);

/* POST authenticate a user */
router.post('/login-email', userController.loginByEmail);

// POST /users/reset-password
router.post('/reset-password', userController.generatePassReset);

// POST /users/reset-password/:resetToken
router.post('/reset-password/:resetToken', userController.resetPassword);

module.exports = router;
