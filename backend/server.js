import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productsRoutes from './routes/ProductsRoutes.js';
import {notFound, errorHandler } from './middleware/errorMiddleware.js';




const port = process.env.PORT || 5000;


connectDB(); // Connected with mongoDB

const app = express();

app.get('/', (req, res) => {
    res.send('APi Running');
});

app.use('/api/products', productsRoutes)

app.use(notFound);
app.use(errorHandler);
app.listen(port, ()=> console.log('Server Running on 5000!'));