const { Schema, model } = require('mongoose');

const transactionSchema = new Schema({
  transaction: {
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'Seller',
    },
    publication: {
      type: Schema.Types.ObjectId,
      ref: 'PublicationTest'
    },
    // sellerRating: {
    //   type: Number,
    //   min: [1, 'Rating must be above 1.0'],
    //   max: [5, 'Rating must be below 5.0'],
    // },
    // productRating: {
    //   type: Number,
    //   min: [1, 'Rating must be above 1.0'],
    //   max: [5, 'Rating must be below 5.0'],
    // },
    quantity:{
      type: Number
    },
    earnings: {
      total_money:{
        type: Number
      },
      seller_earnings:{
        type: Number
      },
      platform_earnings:{
        type: Number  
    },
  },
  status: {
    type: String,
    enum: ['pending', 'rejected', 'fulfilled'],
    default: 'pending',
  },
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  dateOfBuy: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});


const Transaction = model('Transaction', transactionSchema);

module.exports = Transaction;