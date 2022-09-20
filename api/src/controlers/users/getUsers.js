const User = require("../../models/User");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const getUsers = (verifyTokenAndAdmin, async (req, res) => {
    try {
        const users = await User.find()
        for (const user of users) {
            user.password = ""
        }
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = getUsers;