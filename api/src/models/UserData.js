const { Schema, model } = require('mongoose');

const UserDataSchema = new Schema(
    {
        firstname:
            { type: String, unique: false },
        lastname:
            { type: String, unique: false },
        accountid:
            { type: String, unique: true },
        cusid:
            { type: String, unique: true },
        phone:
            { type: Number },
        cuil:
            { type: Number },
        address:
            { type: Object },
        postal:
            { type: Number },
        country:
            { type: Object }       // city, state/province, country
    },
    { timestamps: true }
);

module.exports = model('UserData', UserDataSchema)
