import express from 'express';
import * as userController from '../controllers/userController';
import { asyncErrorWrapper } from '../handlers/errorHandlers';

const router = express.Router();

/* GET */

router.get('/', function (req, res, next) {
  return res.json({ route: 'user' });
});

router.get('/all', asyncErrorWrapper(userController.getAllUsers));

router.get('/current', asyncErrorWrapper(userController.getCurrentUser));

router.get('/logout', asyncErrorWrapper(userController.logout));

/* POST */

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

export default router;
