const Order = require("../../models/Order");
const Product = require("../../models/Products");

const getOrders = async (req, res) => {

    try {
        const orders = await Order.find({}).
            populate({ path: "user userseller"})
        for (const order of orders) {
            for (let prod of order.products) {
                prod.products = await Product.findById(prod.products)
            }
        }
        res.json(orders)
    } catch (error) {
        res.send({ error: error.message });
    }
}

module.exports = getOrders;
