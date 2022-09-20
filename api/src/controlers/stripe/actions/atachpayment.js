require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const atachpayment = (paymentMethodid, customer) => {
    stripe.paymentMethods.attach(
        paymentMethodid,
        customer
    )
        .then(res => res)
        .catch(err => err.message)
}

module.exports = atachpayment
