import express from 'express';
import ProductRouters from './routes/products.routes';
import UserRouters from './routes/user.routes';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/products', ProductRouters);
app.use('/users', UserRouters);

export default app;
