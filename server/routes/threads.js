var express = require('express');
var router = express.Router();
var threadController = require('../controllers/threadController');

/* GET threads */
router.get('/', threadController.getThreads);

module.exports = router;
