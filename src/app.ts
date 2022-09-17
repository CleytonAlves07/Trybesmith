import express from 'express';
import ProductRouters from './routes/products.routes';
import UserRouters from './routes/user.routes';
// import LoginRouters from './routes/login.routes';
import OrderRouters from './routes/order.routes';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/products', ProductRouters);
app.use('/users', UserRouters);
// app.use('/login', LoginRouters);
app.use('/orders', OrderRouters);

export default app;
