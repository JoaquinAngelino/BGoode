const Order = require("../../models/Order");
const Products = require("../../models/Products");

const updateOrder = async (req, res,) => {
    const { status } = req.body
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
              new: true,
            }
          ).populate({path:'user userseller'})

        switch (status) {
            case 'processing':
                // enviar mail comprador
                break;
            case 'completed':
                // enviar mail a vendedor y comprador
                break;
            case 'cancelled':
                // enviar mail a vendedor y comprador
                const products = updatedOrder.products
                products.forEach(product => updeteStock(product.products, product.quantity))
                break;
            case 'sent':
                // enviar mail comprador
                break;
            default:
                throw new Error('status incorrect')
        }
        res.status(204).json(updatedOrder);
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = updateOrder;

function updeteStock(productid, quantity){
    Products.findById(productid).exec(function(error, product){
        if (error) throw new Error(error);
        if (product){
            product.stock += quantity
            product.save()
            return
        }
        throw new Error("Product not found");
    })
}
