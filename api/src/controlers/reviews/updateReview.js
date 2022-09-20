const Review = require("../../models/Review");

const updateReview = async (req, res,) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(204).json(updatedReview);
    } catch (error) {
        res.status(500).send('error al actualizar el review')
    }
}

module.exports = updateReview;
