import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';
import Product_model from './models/products.js';
import data from './data.js';
import products from './routes/product.js';
import cartRoute from './routes/cart.js';

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());

const add_products = async () => {
    try {
        const products = await Product_model.insertMany(data);

        console.log(products);
    } catch (error) {
        console.log(error);
    }
}

//add_products();

//route
app.get('/', (req, res) => {
    res.send('Hellow World!');
});

app.use('/users', routes);
app.use('/products', products);
app.use('/cart', cartRoute);

const CONNECTION_URI = 'mongodb+srv://bookstore:mongodb@cluster0.vufqv.mongodb.net/?retryWrites=true&w=majority';

const PORT = 5000;

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen((PORT), () => console.log(`Server listening on PORT ${PORT}`)))
    .catch((err) => console.error(err));