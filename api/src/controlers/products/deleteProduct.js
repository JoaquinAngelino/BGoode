const Product = require("../../models/Products");
const Order = require("../../models/Order");
const User = require("../../models/User");

const deleteProduct = async (req, res) => {
    
    try {
        // const product = await Product.findById(req.params.id)
        // const userorders = await User.findById(productfound.user).populate(["user", "products"])
        await Product.findByIdAndDelete(req.params.id)
        // userorders.forEach(async (order) => {
        //     const findOne = order.products.find(async (product) => product === productfound._id)
        //     if (findOne) {
        //         usercustomers.push(order.user)
        //         await order.remove()
        //     }
        // });
        /* 
        usercustomers.forEach(user => {
            encontrar comprador/es
            notificar/los baja de orden por cancelacion de producto
        })
        */

        res.send('eliminando el producto ')
    } catch (error) {
        res.status(500).send('error al eliminar el producto')
    }
}

module.exports = deleteProduct;

