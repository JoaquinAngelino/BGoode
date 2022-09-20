const User = require("../../models/User");
const UserData = require("../../models/UserData");
const CryptoJS = require("crypto-js");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const updateUser = (verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }
    try {
        var user = await User.findOneAndUpdate(
            { email: req.params.email },
            { $set: req.body },
            { new: true }
        )
        if (!user) user = await User.findById(req.params.id)
        await UserData.findByIdAndUpdate(
            user.userData,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = updateUser;
