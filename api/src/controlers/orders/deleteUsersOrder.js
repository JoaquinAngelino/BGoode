const User = require("../../models/User");
const Order = require("../../models/Order");

const deleteUsersOrder = async (req, res) => {
    try {
        const orderfound = await Order.findByIdAndDelete(req.params.id)
        if(!orderfound) throw new Error("order not found")
        await deleteorder("user", orderfound)
        await deleteorder("userseller", orderfound)
        res.send(`eliminando la orden ${req.params.id}`)
    } catch (error) {
        res.status(500).send('error al eliminar la orden')
    }
}

module.exports = deleteUsersOrder;

async function deleteorder(user, order) {
    const userfound = await User.findById(order[user]).populate({ path: "orders" })
    if (!userfound) return
    if (userfound.orders && userfound.orders.length > 0) userfound.orders = userfound.orders.filter[order => order !== order._id];
    return await userfound.save();
}
