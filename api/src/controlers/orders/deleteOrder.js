const User = require("../../models/User");

const deleteOrder = async (req, res) => {
    try {
        const user = await User.findById(req.params.userid).populate({path: "orders"})
        user.orders = user.orders.filter(order => order._id !== req.params.id)
        await user.save()
        res.send(`eliminando la orden ${req.params.id} del usuario ${user.username}`)
    } catch (error) {
        res.status(500).send('error al eliminar la orden')
    }
}

module.exports = deleteOrder;
