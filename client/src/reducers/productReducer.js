import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    product: {},
    carts: [],
    message: '',
    search_items: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        add_products: (state, action) => {
            return { ...state, products: [...action.payload.data] }
        },
        add_to_cart: (state, action) => {
            return { ...state, carts: [ ...state.carts, action.payload.data], message: action.payload.msg }
        },
        add_all_to_cart: (state, action) => {
            return { ...state, carts: [...action.payload] }
        },
        clear_cart_item: (state, action) => {
            return { ...state, carts: [], message: action.payload.msg }
        },
        remove_item: (state, action) => {
            return { ...state, carts: [ ...state.carts.filter(cart => cart._id !== action.payload.cartId) ], message: action.payload.data.msg }
        },
        update_item: (state, action) => {
            return { ...state, carts: [...state.carts.map(cart => cart._id === action.payload.cartId ? action.payload.data.data : cart)], message: action.payload.data.msg }
        },
        clear_message: (state) => {
            return { ...state, message: '' }
        },
        searched_items: (state, action) => {
            return { ...state, search_items: action.payload.data, message: action.payload.msg }
        },
        product_error_status: (state, action) => {
            return { ...state, message: action.payload }
        },
        order_placed: (state, action) => {
            return { ...state, message: action.payload.msg }
        }
    },
});

// Action creators are generated for each case reducer function
export const {
    add_products,
    add_to_cart,
    add_all_to_cart,
    clear_cart_item,
    remove_item,
    update_item,
    clear_message,
    searched_items,
    product_error_status,
    order_placed
} = productSlice.actions;

export default productSlice.reducer;