
const cloudinary=require('../../lib/cloudinary')
const fs = require('fs-extra')

async function postImgCloudinary(req, res) {
    try {
        const files = req.files
        let pathsCldry = []
        for (file of files) {
            const { path } = file;
            const pathCldnry = await cloudinary.v2.uploader.upload(path);
            pathsCldry.push(pathCldnry.url)
            fs.unlink(path)
        }
        res.status(200).json({
            message: 'Images uploaded successfully',
            data: pathsCldry,
        })
    } catch (error) {
        res.send({ message: error })
    }
}

module.exports = { postImgCloudinary }
