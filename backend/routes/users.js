const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const { isAuth } = require('../middleware/isAuth');

/* GET all users */
router.get('/', (req, res, next) => {
  return res.send(' respond with a resource');
});

/* POST authenticate a user */
router.post('/login', userController.loginUser);

/* POST create a user */
router.post('/signup', userController.signupUser);

// POST /users/reset-password
router.post('/reset-password', userController.generatePasswordReset);

// POST /users/reset-password/:token
router.post('/reset-password/:token', userController.resetPassword);

module.exports = router;
