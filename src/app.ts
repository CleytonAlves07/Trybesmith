import express from 'express';
import ProductRouters from './routes/products.routes';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/products', ProductRouters);

export default app;
