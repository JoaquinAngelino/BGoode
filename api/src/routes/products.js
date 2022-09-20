const router = require('express').Router();
const getProducts = require('../controlers/products/getProducts');
const getProduct = require('../controlers/products/getProduct');
const getBrands = require('../controlers/products/getBrands');
const addProduct = require('../controlers/products/addProduct');
const updateProduct = require('../controlers/products/updateProduct');
const deleteProduct = require('../controlers/products/deleteProduct');
// const { verifyTokenAndAuthorization} = require("../controlers/users/verifyToken")

router.get('/brands', getBrands)

router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/', /* verifyTokenAndAuthorization, */ addProduct)

router.put('/:id', /* verifyTokenAndAuthorization, */ updateProduct)

router.delete('/:id', /* verifyTokenAndAuthorization, */ deleteProduct)

module.exports =  router
