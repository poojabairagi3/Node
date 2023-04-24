// // const path=require('path');
// const express=require('express');
// const router=express.Router();
// // const rootDir=require('../util/path');
// const contactController=require('../controllers/success');
// router.get('/contactus',contactController);


// // router.get('/contactus',(req,res,next)=>{
// //     res.sendFile(path.join(rootDir,'views','contact.html'));
// // });


// module.exports=router;



const express=require('express');
// const path=require('path');
//const path=require('path');

const router=express.Router();

// router.get('/ContactUs',(req,res,next)=>{
//     res.sendFile(path.join(__dirname,'..','views','ContactUs.html'));
// });
const contactusController = require('../controllers/contactUsSuccess');

router.get('/ContactUs',contactusController.getContactUs);

module.exports=router;