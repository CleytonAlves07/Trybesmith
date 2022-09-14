import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const routers = Router();

const productController = new ProductController();

routers.get('/', productController.getAll);

export default routers;