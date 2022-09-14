import express from 'express';

const app = express();

app.use(express.json());

app.get('/products');

export default app;
