import express from 'express';
import { add_to_cart, get_all_carts, empty_cart, remove_item_from_cart, update_item_from_cart } from '../controller/cart.js';

const routes = express.Router();

routes.post('/add', add_to_cart);
routes.get('/get_carts', get_all_carts);
routes.delete('/empty', empty_cart);
routes.delete('/delete_item/:id', remove_item_from_cart);
routes.put('/update_item/:id', update_item_from_cart);

export default routes;