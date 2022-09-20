const User = require("../../models/User");

const getUserOrders = async (req, res) => {
    try {
        const userorders = await User.findById(req.params.userid).populate({ path: "orders"})
        res.json(userorders)
    } catch (error) {
        res.send({ error: error.message });
    }
}

module.exports = getUserOrders;
