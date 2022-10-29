const mongoose = require("mongoose");
const { Schema, model } = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    nickname: { type: String, required: true, unique: true },

    username: { type: String, unique: true },

    email: { type: String, required: true, unique: true },

    name: { type: String, },

    lastname: {type: String, },

    country: {type: String, default: "Argentina"},

    password: { type: String, },
    
    picture: {type: String, },

    phone: {type: String,},

    purchase_order: {
        products: [{
          publicationId: {
            type: Schema.Types.ObjectId,
            ref: 'PublicationTest'
          },
          quantity: {
            type: Number
          },
        }],
        link: {
          type: String
        }
      },

    address: {
            province: String,
            city: String,
            postalcode: Number,
            street: String,
            number: String,
            dpto: {
              floor: String,
              number: String,
            },
            reference: String,
          },

    isAdmin: { type: Boolean, default: false },
    
    isActive: { type: Boolean, default: true },
    
    isBloked: { type: Boolean, default: false }, // baneado ? razon? por tiempo?
    
    authorization: {
        roles: {
          type: [String],
          enum: ['common', 'buyer', 'seller', 'admin'],
          default: ['common'],
        },
      },

    score: {
      stars: { type: Number, default: 0 },
      reviews: { type: Number, default: 0 },
    },

    purchase_history: {
        type: [Schema.Types.ObjectId],
        ref: "Transaction",
      },
   

    favorites: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;
