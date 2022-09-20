const User = require("../../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const loginUser = ('/login', async (req, res) => {
    const { nickname, password } = req.body

    if (!nickname || !password) {
        return res.status(402).send("Missing username and/or password")
    }
    try {
        const user = await User.findOne({ nickname });
        if (!user) return res.status(401).json("Wrong User Name");
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        if (originalPassword != password) return res.status(401).json("Wrong Password");
        const accessToken = await jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );
        res.status(200).json({ accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = loginUser;
