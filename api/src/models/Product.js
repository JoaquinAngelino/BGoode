const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        seller: {
            type: Schema.Types.ObjectId,
            ref: 'Seller',
          },
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
        stock: { 
                type: Number,
                validate: {
                  validator: function (el) {
                    return el >= 0;
                  },
                  message: 'Stock can not be a negative value',
                },
              },
        brand:
            { type: String, required: true },
        location:
            { type: String },
        
        transactions: {
                type: [Schema.Types.ObjectId],
                ref: 'Transaction',
              },
        status:
            { type: String, default: "New" }

    },
    { timestamps: true }
);

productSchema.pre('save', function (next) {
    if (this.stock.stockTotal <= 0) {
      this.status = false;
    } else {
      this.status = true;
    }
    next();
  });

const Products = model('Products', productSchema);

module.exports = Products;


