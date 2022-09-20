require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const createaccount = () => {
stripe.accounts.create({
    type: 'standard',
  })
    .then(({id}) => id)
    .catch(error => error.message);
}

module.exports = createaccount;
