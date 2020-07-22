var express = require('express');
var router = express.Router();
var threadController = require('../controllers/threadController');

/* GET home page. */
// TODO: get thread by id
router.get('/:id', threadController.getThread);

module.exports = router;
