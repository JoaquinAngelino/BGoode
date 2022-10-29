const {  sendClaimMail, autoClaimRes } = require('./generateNotifications')


async function sendClaim(req, res) {
    try {
        const { name, email, subject, message } = req.body
        await sendClaimMail(message, subject, email);
        await autoClaimRes(name, email, subject)
        res.status(200).send({
            message: "Info send!"
        })
    } catch (e) {
        res.status(500).send({
            error: e
        })
    }
}
module.exports = { sendClaim }