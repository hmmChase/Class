const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { isAuth } = require('../middleware/isAuth');

router.get('/', isAuth, projectController.getProjects);

router.post('/create', projectController.create);

module.exports = router;
