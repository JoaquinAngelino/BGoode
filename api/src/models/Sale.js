const { Schema, model } = require('mongoose');

const saleSchema = new Schema({
    onsales:
        [{ type: Schema.Types.ObjectId, ref: "Products" }],
    waiting:
        [{ type: Schema.Types.ObjectId, ref: "Products" }],
    sold:
        [{ type: Schema.Types.ObjectId, ref: "Products" }]
},
    { timestamps: true }
)

module.exports = model('Sale', saleSchema)
