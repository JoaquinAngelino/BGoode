const Product = require("../models/Products");
const data = require('./data.json')

exports.fillDatabase = async () => {
    for (const item of data) {
        item.user = "6318c0d8409bf52757b70bc9"
    }
    try {
        var count = await Product.estimatedDocumentCount()
        if (count > 0) return
        await Product.insertMany(data)
    } catch (error) {
        return
    }
}
