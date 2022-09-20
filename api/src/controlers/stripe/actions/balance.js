require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

stripe.balance.retrieve()
    .then((balance)=> console.log(balance))
    .catch((error)=> console.log(error))