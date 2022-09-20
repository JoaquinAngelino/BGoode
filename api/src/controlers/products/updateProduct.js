const Product = require("../../models/Products");

const updateProduct = async (req, res,) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(204).json(updatedProduct);
    } catch (error) {
        res.status(500).send('error al actualizar el producto')
    }
}

module.exports = updateProduct;
