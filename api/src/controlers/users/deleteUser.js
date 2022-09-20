const User = require("../../models/User");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const deleteUser = (verifyTokenAndAuthorization, async (req, res) => {
    const { email } = req.params
    try {
        await User.findOneAndDelete(email);
        res.status(200).json("User has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = deleteUser;
