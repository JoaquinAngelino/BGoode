const router = require('express').Router();
// const { verifyTokenAndAuthorization} = require("../controlers/users/verifyToken")

const {
    stripeCheckout,
    getBalance
} = require('../controlers/stripe/stripe');

router.get("/balance", /* verifyTokenAndAuthorization, */ getBalance)

router.post("/checkout", /* verifyTokenAndAuthorization, */ stripeCheckout)

module.exports = router;
