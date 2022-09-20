const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);


const addUser = (async (req, res) => {
    const { email, nickname, username } = req.body
    try {
        const isExistUser = await User.findOne({ email }).populate([
            'orders',
            'favorites'
        ])

        if (isExistUser) return res.send("El usuario ya existe")

        // let isAdmin = false
        // if (email === 'mariana.stocco@outlook.com') isAdmin = true

        const newUser = new User({
            ...req.body,
            username: username ? username : nickname,
            nickname: username ? username : nickname
        })
        var { id } = await stripe.accounts.create({
            type: 'express',
        })
        newUser.accountid = id
        var { id } = await stripe.customers.create({
            description: 'My Test Customer',
        })
        newUser.cusid = id
        await newUser.save()

        const user = await User.find({ email }).populate([
            'orders',
            'favorites'
        ])

        res.json([user])
    } catch (error) {
        res.status(404).send(error.message)
    }
});

module.exports = addUser;
