import * as UserController from '../controllers/users';
import {Router} from 'express';

const userRouter = new Router();

userRouter.route('/users').get(UserController.usersReadAll);
userRouter.route('/users/:userid').get(UserController.usersReadOne);
userRouter.route('/users').post(UserController.usersCreateOne);
userRouter.route('/users/:userid').delete(UserController.usersDeleteOne);
//userRouter.route('/users/auth').get(UserController.usersAuth);


export default userRouter;

