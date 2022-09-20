const {Router}=require('express')
const {authMail} = require('../controlers/notifications/notifications')
const router=Router();

router.post('/',authMail)

module.exports=router;

