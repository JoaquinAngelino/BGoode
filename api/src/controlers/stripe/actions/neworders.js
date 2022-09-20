const Order = require("../../../models/Order");
const User = require("../../../models/User");
const Products = require("../../../models/Products");

const neworders = async (order) => {
    const { products } = order;
    try {
        products.forEach(product => {
            updeteStock(product.products, product.quantity)
        });
        const nerOrder = new Order(order);
        const ordersaved = await nerOrder.save();
        ordersaved.user = await saveorder(order.user, ordersaved._id)
        ordersaved.userseller = await saveorder(order.userseller, ordersaved._id)
        return ordersaved
    } catch (error) {
        return "neworders error: " + error.message;
    }
}

module.exports = neworders;

async function saveorder(user, order) {
    try {
        let userfound = await User.findById(user)
        userfound.orders.push(order);
        return userfound.save();
    } catch (error) {
        throw new Error(error.message);
    }
}

function updeteStock(productid, quantity) {
    Products.findById(productid).exec(function (error, product) {
        if (error) throw new Error(error);
        product.stock -= quantity
        product.save()
    })
}
