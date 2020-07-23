var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users */
router.get('/', userController.getUsers);

module.exports = router;
