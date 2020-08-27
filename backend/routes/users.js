import express from 'express';
import * as userController from '../controllers/userController';
import { asyncErrorWrapper } from '../handlers/errorHandlers';
// import { isAuth } from '../middleware/isAuth';

const router = express.Router();

router.get('/', asyncErrorWrapper(userController.getCurrentUser));

router.post('/signup', asyncErrorWrapper(userController.signup));

router.post('/login', asyncErrorWrapper(userController.login));

router.get('/logout', asyncErrorWrapper(userController.logout));

router.post(
  '/reset-password',
  asyncErrorWrapper(userController.generatePassReset)
);

router.post(
  '/reset-password/:resetToken',
  asyncErrorWrapper(userController.resetPassword)
);

export default router;
