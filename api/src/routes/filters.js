const router = require('express').Router();
const {filterProducts}=require('../controlers/filters/filters')

router.get("/",filterProducts)

module.exports = router;

