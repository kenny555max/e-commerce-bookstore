import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000'
});

export const signup = (form_data) => API.post('/users/signup', form_data);
export const signin = (form_data) => API.post('/users/signin', form_data);

export const all_products = (limit) => API.get(`/products/all_products?_limit=${limit}`);
export const search_for_an_item = (search_value) => API.get(`/products/search?search=${search_value}`);

export const add_to_cart = (data) => API.post('/cart/add', data);
export const get_all_carts = () => API.get('/cart/get_carts');
export const empty_cart = () => API.delete('/cart/empty');
export const remove_item_from_cart = (id) => API.delete(`/cart/delete_item/${id}`);
export const update_item_from_cart = (id, update_data) => API.put(`/cart/update_item/${id}`, update_data);