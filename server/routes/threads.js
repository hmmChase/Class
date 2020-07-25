var express = require('express');
var router = express.Router();
var threadController = require('../controllers/threadController');

/* GET all threads */
router.get(
  '/',
  //  isAuth,
  threadController.getThreads
);

/* GET thread by id */
// router.get(
//   '/:id',
//   //  isAuth,
//   threadController.getThread
// );

module.exports = router;
