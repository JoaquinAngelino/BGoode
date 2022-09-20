const router = require('express').Router();
const getUser = require('../controlers/users/getUser');
const getUsers = require('../controlers/users/getUsers');
const addUser = require('../controlers/users/addUser');
const updateUser = require('../controlers/users/updateUser');
const deleteUser = require('../controlers/users/deleteUser');
const loginUser = require('../controlers/users/loginUser');

router.get('/', getUsers)

router.get('/:email', getUser)

router.post('/', addUser)

router.post('/login', loginUser)

router.put('/:email', updateUser)

router.delete('/:email', deleteUser)

module.exports =  router
