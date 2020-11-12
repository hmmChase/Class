import express from 'express';
import * as userController from '../controllers/userController';
// import { handleErrors } from '../handlers/errorHandler';

const router = express.Router();

/* GET */

router.get('/', (req, res, next) => res.json({ route: 'user' }));

router.get('/all', userController.getAllUsers);

router.get('/current', userController.getCurrentUser);

/* POST */

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.post('/logout', userController.logout);

router.post('/reset-password-request', userController.generatePassReset);

router.post('/reset-password', userController.resetPassword);

export default router;
