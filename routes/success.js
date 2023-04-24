// const path=require('path');
const express=require('express');
// const rootDir=require('../util/path');
const successController = require('../controllers/contactUsSuccess');
const router=express.Router();


// router.get('/admin/success',(req,res,next)=>{
//     res.sendFile(path.join(rootDir,'views','success.html'));
// });

router.get('/success',successController.getSuccess);
router.post('/success',successController.postSuccess);

module.exports=router;