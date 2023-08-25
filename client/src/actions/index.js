import * as api from '../api';
import {
    add_products,
    add_to_cart,
    add_all_to_cart,
    clear_cart_item,
    remove_item,
    update_item,
    searched_items
} from '../reducers/productReducer';

export const signup = async (form_data, navigate) => {
    try {
        const { data } = await api.signup(form_data);

        console.log(data);

        navigate('/home')
    } catch (error) {
        console.log(error);
    }
}

export const signin = async (form_data, navigate) => {
    try {
        const { data } = await api.signin(form_data);

        console.log(data);

        navigate('/home')
    } catch (error) {
        console.log(error);
    }
}

export const all_products = (limit) => async (dispatch) => {
    try {
        const { data } = await api.all_products(limit);

        dispatch(add_products(data));

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const add_product_to_cart = (product_data) => async (dispatch) => {
    try {
        const { data } = await api.add_to_cart(product_data);

        dispatch(add_to_cart(data))
    } catch (error) {
        console.log(error);
    }
}

export const get_all_carts = () => async (dispatch) => {
    try {
        const { data } = await api.get_all_carts();

        dispatch(add_all_to_cart(data));

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const empty_cart_item = () => async (dispatch) => {
    try {
        const { data } = await api.empty_cart();

        dispatch(clear_cart_item(data));
    } catch (error) {
        console.log(error);
    }
}

export const remove_item_from_cart = (cartId) => async (dispatch) => {
    try {
        const { data } = await api.remove_item_from_cart(cartId);

        dispatch(remove_item({ cartId, data }));
    } catch (error) {
        console.log(error);
    }
}

export const update_item_from_cart = (cartId, update_data) => async (dispatch) => {
    try {
        const { data } = await api.update_item_from_cart(cartId, update_data);

        dispatch(update_item({ cartId, data }));
    } catch (error) {
        console.log(error);
    }
}

export const search_item = (search_value) => async (dispatch) => {
    try {
        const { data } = await api.search_for_an_item(search_value);

        dispatch(searched_items(data));
    } catch (error) {
        console.log(error);
    }
}