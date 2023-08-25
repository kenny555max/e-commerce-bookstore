import express from 'express';
import { all_products, search_for_an_item } from '../controller/products.js';

const routes = express.Router();

routes.get('/all_products', all_products);
routes.get('/search', search_for_an_item);

export default routes;