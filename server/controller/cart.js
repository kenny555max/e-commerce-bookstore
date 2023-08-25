import Cart_Model from "../models/cart.js";

export const add_to_cart = async (req, res) => {
    try {
        const cart = await Cart_Model.create({ ...req.body, productId: req.body._id });

        res.status(200).json({ data: cart, msg: 'product added to cart!' });
    } catch (error) {
        console.log(error);
    }
}

export const get_all_carts = async (req, res) => {
    try {
        const carts = await Cart_Model.find();

        res.status(200).json(carts);
    } catch (error) {
        console.log(error);
    }
} 

export const empty_cart = async (req, res) => {
    try {
        await Cart_Model.deleteMany();

        res.status(200).json({ msg: 'cart emptied!' });
    } catch (error) {
        console.log(error);
    }
}

export const remove_item_from_cart = async (req, res) => {
    try {
        const cart = await Cart_Model.findByIdAndDelete(req.params.id);

        res.status(200).json({ msg: 'item removed from cart!' });
    } catch (error) {
        console.log(error);
    }
}

export const update_item_from_cart = async (req, res) => {
    try {
        const cart = await Cart_Model.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({ data: cart, msg: 'Cart item updated!' });
    } catch (error) {
        console.log(error);
    }
}