const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        nickname:
            { type: String, required: true, unique: true },
        username:
            { type: String, unique: true },
        email:
            { type: String, required: true, unique: true },
        name: {
            type: String,
        },
        lastname: {
            type: String,
        },
        birthday: {
            type: String,
            default: '',
        },
        dni: {
            type: String,
            default: '',
        },
        country: {
            type: String,
            default: '',
        },
        password:
            { type: String },
        picture: {
            type: String
        },
        phone: {
            type: String,
            default: '',
        },
        address: {
            type: String,
            default: '',
        },
        ciudad: {
            type: String,
            default: '',
        },
        postal: {
            type: String,
            default: '',
        },
        accountid:
            { type: String },
        cusid:
            { type: String },
        isAdmin:
            { type: Boolean, default: false },
        isActive:
            { type: Boolean, default: true },
        isBloked:
            { type: Boolean, default: false },  // baneado ? razon? por tiempo?
        score:
        {
            stars: { type: Number, default: 0 },
            reviews: { type: Number, default: 0 },
        },
        products:
            [{ type: Schema.Types.ObjectId, ref: "Products" }],
        orders:
            [{ type: Schema.Types.ObjectId, ref: "Order" }],
        favorites:
            [{ type: Schema.Types.ObjectId, ref: "Order" }]
    },
    { timestamps: true }
);

module.exports = model('User', UserSchema)
