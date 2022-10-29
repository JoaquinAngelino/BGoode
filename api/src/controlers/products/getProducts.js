const Product = require("../../models/Product");

const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find().populate({path:"seller"})
        for (const product of products) {
            if(product.user) product.user.password = ""
        }
        res.json(products)
    } catch (error) {
        res.send({ error: error.message });
    }
}

module.exports = getProducts;
