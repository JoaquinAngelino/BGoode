const { sendEmailSale, sendClaimMail, autoClaimRes } = require('./generateNotifications')
const Users = require('../../models/User')
const Orders = require('../../models/Order')
const Products = require('../../models/Products')
//usernameSeller,emailSeller,usernameBuyer,nameProduct
async function saleMail(id) {
    try {
        const foundOrder = await Orders.findById({ _id: id })
        const foundUserSeller = await Users.findById(foundOrder.userseller).populate({ path: "orders" });
        const foundUserBuyer = await Users.findById(foundOrder.user).populate({ path: "orders" })
        const foundIdProducts = foundOrder.products.map(pro => pro.products);
        const foundProducts = await Promise.all(foundIdProducts.map((id) => Products.findById(id)))
        const foundProductsName = foundProducts.map(p => p.name)
        const info = await sendEmailSale(foundUserSeller.username, foundUserSeller.email, foundUserBuyer.username, foundProductsName.join(', '))
        console.log(info)
    } catch (e) {
        console.log(e)
    }
}
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
module.exports = { saleMail, sendClaim }