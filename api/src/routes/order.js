const router = require('express').Router();

const addOrder = require('../controlers/orders/addOrder');
const getOrder = require('../controlers/orders/getOrder');
const getOrders = require('../controlers/orders/getOrders');
const getUserOrders = require('../controlers/orders/getUserOrders');
const deleteOrder = require('../controlers/orders/deleteOrder');
const deleteUsersOrder = require('../controlers/orders/deleteUsersOrder');
const updateOrder = require('../controlers/orders/updateOrder');

router.get('/', getOrders);   

router.get('/user/:userid', getUserOrders);     

router.get('/:id', getOrder);  

router.post('/', addOrder);   

router.delete('/users/:id', deleteUsersOrder);     

router.delete('/:id/user/:userid', deleteOrder);  

router.put('/:id', updateOrder);   

module.exports =  router
