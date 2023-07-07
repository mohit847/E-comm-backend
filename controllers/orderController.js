const Order = require('../models/Order');

exports.getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        next(err);
    }
};

exports.getOrderById = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (err) {
        next(err);
    }
};

exports.createOrder = async (req, res, next) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (err) {
        next(err);
    }
};

exports.updateOrder = async (req, res, next) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (err) {
        next(err);
    }
};

exports.deleteOrder = async (req, res, next) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json({ message: 'Order deleted successfully' });
    } catch (err) {
        next(err);
    }
};
