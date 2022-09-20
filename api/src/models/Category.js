const { Schema, model } = require('mongoose');

const CategorySchema = new Schema(
    {
        name:
            { type: String, required: true, unique: true },
        products: [
            {type: Schema.Types.ObjectId,
            ref: 'Products',
        }
        ],    
    },
    { timestamps: true }
);

module.exports = model('Category', CategorySchema)
