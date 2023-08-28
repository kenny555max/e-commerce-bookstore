import express from 'express';
import { get_order, place_order } from '../controller/order.js';
import middleware from '../middleware/index.js';

const routes = express.Router();

routes.post('/place_order', middleware, place_order);
routes.get('/get_order', middleware, get_order);

export default routes;