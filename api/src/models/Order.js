const { Schema, model } = require('mongoose');

const OrderSchema = new Schema(
    {
        user:       //  buyer
            { type: Schema.Types.ObjectId, ref: "User", required: true },
        products: [
            {
                products:
                    { type: Schema.Types.ObjectId, ref: "Product" },
                quantity:
                    { type: Number, default: 1 },
            },
        ],
        status:
            { type: String, default: "pending" },
        userseller:
            { type: Schema.Types.ObjectId, ref: "User", required: true },
        payment:
            { type: String }
    },
    { timestamps: true }
);

module.exports = model('Order', OrderSchema)