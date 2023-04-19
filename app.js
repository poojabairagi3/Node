



const express=require('express');

const app=express();

const routeAdmin=require('./routes/admin');

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));


// app.use('/login',(req,res,next)=>{
   
//     res.send('<form action="/"  method="post"><input type="text" name="name" placeholder="Enter your name"><button type="submit">log in</button></form>')
    
// })
// app.use('/',(req,res,next)=>{
//     console.log(req.body)
//     res.send('<form action="/"  method="post"><input type="text" name="message" placeholder="type a message"><button type="submit">send</button></form>')
// })
app.use(routeAdmin);

app.post('/',(req,res,next)=>{
    res.status(404).send('<h1>Error 404 This Page is Not Founded</h1>')
})

app.listen(3000);