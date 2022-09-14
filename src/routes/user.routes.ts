import { Router } from 'express';
import UserController from '../controllers/user.controller';

const routers = Router();

const userController = new UserController();

routers.post('/', userController.create);

export default routers;