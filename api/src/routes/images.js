const {Router}=require('express') 
const {postImgCloudinary}=require('../controlers/cloudinary/cloudinary');
const upload = require('../lib/multer')
const router=Router()

router.post('/',upload.array('image',4),postImgCloudinary)

module.exports = router;