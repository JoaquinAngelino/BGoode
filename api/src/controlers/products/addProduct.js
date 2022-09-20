const Product = require("../../models/Products");
const User = require("../../models/User");

const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const productSaved = await newProduct.save();
        const user = await User.findOne({email: req.body.email})
        productSaved.user = user
        user.products.push(newProduct._id); 
        await user.save();
        res.status(201).json(productSaved);
    } catch (error) {
        res.send({ error: error.message });
    }
}

module.exports = addProduct;
