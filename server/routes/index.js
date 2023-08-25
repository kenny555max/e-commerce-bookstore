import express from 'express';
import { signup, signin } from '../controller/index.js';

const routes = express.Router();

routes.post('/signup', signup);
routes.post('/signin', signin);

export default routes;