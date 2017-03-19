import * as UserController from '../controllers/users';
import {Router} from 'express';

const router = new Router();

router.route('/users').get(UserController.usersReadAll):
router.route('/users/:userid').get(UserController.usersReadOne);
router.route('/users').post(UserController.usersCreateOne);
router.route('/users/:userid').delete(UserController.usersDeleteOne);
router.route('/users/auth').get(UserController.usersAuth);


export default router;

