import Order_Model from "../models/order.js";

export const place_order = async (req, res) => {
    try {
        if (!req.id) return res.status(401).json({ msg: 'Unauthorized!' });
        
        const order = await Order_Model.create(req.body);

        console.log(order);

        res.status(200).json({ order, msg: 'Order placed successfully!' });
    } catch (error) {
        console.log(error);
    }
}

export const get_order = async (req, res) => {
    try {
        if (!req.id) return res.status(401).json({ msg: 'Unauthorized!' });

        const order = await Order_Model.find({ userId: req.id });

        console.log(order);

        res.status(200).json(order);
    } catch (error) {
        console.log(error);
    }
}