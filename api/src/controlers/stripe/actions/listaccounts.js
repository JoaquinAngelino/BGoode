require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const listaccounts = () => {
stripe.accounts.list()
    .then(({data}) => data)
    .catch(error => error.message);
}

listaccounts()
