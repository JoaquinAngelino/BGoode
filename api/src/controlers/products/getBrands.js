const Product = require("../../models/Products");

const getBrands = async (req, res, next) => {
    try {
        res.json(await Product.find({}).distinct("brand"));
    } catch (error) {
        res.send({ error: error.message });
    }
}

module.exports = getBrands;
