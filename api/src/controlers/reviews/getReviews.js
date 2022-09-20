const Review = require("../../models/Review");

const getReviews = async (_, res) => {
    try {
        const reviews = await Review.find()
        res.json(reviews)
    } catch (error) {
        res.send({ error: error.message });
    }
}

module.exports = getReviews;
