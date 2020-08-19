const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { asyncErrorWrapper } = require('../handlers/errorHandlers');
const { isAuth } = require('../middleware/isAuth');

router.get('/', isAuth, asyncErrorWrapper(userController.getUsers));

router.get('/login-token', asyncErrorWrapper(userController.loginByToken));

router.post('/login-email', asyncErrorWrapper(userController.loginByEmail));

router.post('/signup', asyncErrorWrapper(userController.signupByEmail));

router.post(
  '/reset-password',
  asyncErrorWrapper(userController.generatePassReset)
);

router.post(
  '/reset-password/:resetToken',
  asyncErrorWrapper(userController.resetPassword)
);

module.exports = router;
