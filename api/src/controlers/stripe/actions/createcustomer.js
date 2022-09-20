require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

stripe.customers.create({
    description: 'My First Test Customer (created for API)',
})
    .then(customer => customer)
    .catch(err => err.message)
