const User = require("../../models/User");
const {
    /* verifyToken,
    verifyTokenAndAuthorization, */
    verifyTokenAndAdmin,
} = require("./verifyToken");

const getUser = (verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email })
            .populate({ path: "orders favorites" });
        if (!user) return res.send("User not found")
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = getUser;
