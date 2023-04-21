const path=require('path');
const express=require('express');
const rootDir=require('../util/path');

const router=express.Router();


router.get('/admin/success',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
});

module.exports=router;