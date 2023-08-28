import express from 'express';
import { add_to_cart, get_all_carts, empty_cart, remove_item_from_cart, update_item_from_cart } from '../controller/cart.js';
import middleware from '../middleware/index.js';

const routes = express.Router();

routes.post('/add', middleware, add_to_cart);
routes.get('/get_carts', middleware, get_all_carts);
routes.delete('/empty/:id', middleware, empty_cart);
routes.delete('/delete_item/:id', middleware, remove_item_from_cart);
routes.put('/update_item/:id', middleware, update_item_from_cart);

export default routes;