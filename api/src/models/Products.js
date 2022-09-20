const { Schema, model } = require('mongoose');

const ProductSchema = new Schema(
    {
        user:
            { type: Schema.Types.ObjectId, ref: "User" },
        name:
            { type: String, required: true },
        description:
            { type: String, default: "not included"},
        image:
            [{ type: String, required: true }],
        category:
            { type: Array },
        color:
            { type: String, required: true },
        price:
            { type: Number, required: true },
        stock:
            { type: Number, default: 0 },
        brand:
            { type: String, required: true },
        location:
            { type: String },
        status:
            { type: String, default: "New" }

    },
    { timestamps: true }
);

module.exports = model('Product', ProductSchema)
