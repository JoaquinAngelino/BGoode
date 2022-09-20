const Review = require("../../models/Review");

const getReview = async (req, res) => {
    try {
        const review = await Review.find({product: req.params.id});
        res.json(review);
    } catch (error) {
        res.status(500).send('error al buscar el review')
    }
}

module.exports = getReview;
