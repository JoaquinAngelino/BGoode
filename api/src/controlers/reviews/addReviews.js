const Review = require("../../models/Review");

const addReview = async (req, res) => {
    try {
        const newReview = new Review(req.body);
        const reviewSaved = await newReview.save();
        res.status(201).json(reviewSaved);
    } catch (error) {
        res.send({ error: error.message });
    }
}

module.exports = addReview;
