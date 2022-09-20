const cloudinary=require('cloudinary')
const {API_KEY_CDNRY,API_SECRET_CDNRY,CDNRY_NAME}=process.env

cloudinary.config({
    cloud_name:CDNRY_NAME,
    api_key:API_KEY_CDNRY,
    api_secret:API_SECRET_CDNRY
})


module.exports=cloudinary