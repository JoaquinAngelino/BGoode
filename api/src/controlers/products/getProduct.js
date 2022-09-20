const Product = require("../../models/Products");

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate({path:"user"});
        if(product.user) product.user.password = "";
        res.json(product);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getProduct;
