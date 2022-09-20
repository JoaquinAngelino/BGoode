const Order = require("../../models/Order");
const User = require("../../models/User");
const Products = require("../../models/Products");

const {saleMail}=require('../nodemailer/send-mails')
const addOrder = async (req, res) => {
    const { products } = req.body;
    try {
        products.forEach(product => {
            updeteStock(product.products, product.quantity)
        });
        const nerOrder = new Order(req.body);
        const orderSaved = await nerOrder.save();
        await saveorder("user", orderSaved)
        await saveorder("userseller", orderSaved)
        const userseller = await User.findById(orderSaved.userseller).populate({path: "orders"})
        if (!userseller) throw new Error("Not Found seller or blocked user"); 
        await saleMail(nerOrder._id);
        if(userseller.orders && userseller.orders.length === 0) userseller.orders = [ orderSaved._id];
        else userseller.orders = [ ...userseller.orders, orderSaved._id ];
        await userseller.save();
        res.status(201).json(orderSaved);
    } catch (error) {
        res.send({ error: error.message });
    }
}

module.exports = addOrder;

async function saveorder(user, order) {
    const userfound = await User.findById(order[user]).populate({ path: "orders" })
    if (!userfound) throw new Error(`${user} not Found or blocked`);
    if (userfound.orders && userfound.orders.length === 0) userfound.orders = [order._id];
    else userfound.orders = [...userfound.orders, order._id];
    return await userfound.save();
}

function updeteStock(productid, quantity) {
    Products.findById(productid).exec(function (error, product) {
        if (error) throw new Error(error);
        if (product) {
            product.stock -= quantity
            product.save()
            return
        }
        throw new Error("Product not found");
    })
}
