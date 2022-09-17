import { Router } from 'express';
import LoginController from '../controllers/login.controller';

const routers = Router();

const loginController = new LoginController();

routers.post('/', loginController.create);

export default routers;