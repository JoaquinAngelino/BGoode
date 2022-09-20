const router = require('express').Router();

const addReviews = require('../controlers/reviews/addReviews');
const getReview = require('../controlers/reviews/getReview');
const getReviews = require('../controlers/reviews/getReviews');
const updateReview = require('../controlers/reviews/updateReview');
const deleteReview = require('../controlers/reviews/deleteReview');



router.get('/', getReviews);

router.get('/:id', getReview);

router.post('/', addReviews);

router.delete('/:id', deleteReview);

router.put('/:id', updateReview);

module.exports =  router