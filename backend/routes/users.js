const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { asyncErrorWrapper } = require('../handlers/errorHandlers');
const { isAuth } = require('../middleware/isAuth');

router.get('/', isAuth, asyncErrorWrapper(userController.getCurrentUser));

router.post('/signup', asyncErrorWrapper(userController.signup));

router.post('/login', asyncErrorWrapper(userController.login));

router.post(
  '/reset-password',
  asyncErrorWrapper(userController.generatePassReset)
);

router.post(
  '/reset-password/:resetToken',
  asyncErrorWrapper(userController.resetPassword)
);

module.exports = router;
