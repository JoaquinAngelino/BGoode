const Order = require("../../models/Order");
const Products = require("../../models/Products");

const getOrder = async (req, res) => {
    try {
        const order = await Order.findOne({ _id: req.params.id }).populate(["user userseller"])
        for (let prod of order.products) {
            prod.products = await Products.findById(prod.products)
        }
        res.json(order);
    } catch (error) {
        res.status(500).send('error al buscar la orden')
    }
}

module.exports = getOrder;
