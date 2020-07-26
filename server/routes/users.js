const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* GET all users */
router.get('/users', userController.getUsers);

/* POST create a user */
router.post('/create', userController.signup);

/* POST authenticate a user */
router.post('/login', userController.login);

module.exports = router;
