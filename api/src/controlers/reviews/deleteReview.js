const Review = require("../../models/Review");

const deleteReview = async (req, res) => {
    try {
        await Review.findOneAndDelete({ _id: req.params.id });
        res.send('eliminando el review con id: ' + req.params.id)
    } catch (error) {
        res.status(500).send('error al eliminar el review')
    }
}

module.exports = deleteReview;
