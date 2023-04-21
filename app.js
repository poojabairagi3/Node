//(1)// node .js


// // import http from 'http';
// const http =require('http');
// const routes =require('./h8routes');
// console.log(routes.someText);
// const server = http.createServer(routes.handler);
// server.listen(3000);


//(2) //Express.js

// const express =require('express');
// const bodyparser=require('body-parser');
// const app =express();                    (use allows us to add new middleware function)
// app.use(bodyparser.urlencoded({extended:true})); //for parsing form 
// app.use('/add-product',(req,res,next)=>{
//     res.send('<form action="/product" method="POST"><input type="text" name="product"><input type="number" name="size"><button type="submit">Add Product</button> </form>');   
// });
// app.post('/product',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/');
// });
// app.use('/',(req,res,next)=>{
//     res.send('<h1>Hello from Express!</h1>');
// });
// app.listen(3000);


//(3) // Express routing | for status show page not found

// const express =require('express');
// const bodyparser=require('body-parser');

// const app =express();

// const adminRoutes=require('./routes/admin.js');
// const shopRoutes=require('./routes/shop.js');

// app.use(bodyparser.urlencoded({extended:true})); //for parsing form 

// app.use('/admin',adminRoutes);
// app.use('/shop',shopRoutes);

// app.use((req,res)=>{
//     res.status(404).send('<h1>Page not found</h1>')
// })

// app.listen(3000);

// **************
// const express=require('express');
// const bodyparser=require('body-parser');
// const app =express();

// const userRoutes=require('./routes/routes2/login.js');
// const messageRoutes=require('./routes/routes2/message.js');
// // const detailRoutes=require('./routes/details.js');

// app.use(bodyparser.urlencoded({extended:true}));

// app.use('/username',userRoutes);
// app.use('/message',messageRoutes);
// // app.use('/details',detailRoutes);

// app.use((req,res)=>{
//     res.status(404).send('<h1>Page not found</h1>');
// });
// app.listen(3000);







// differentpaths
const path=require('path');
const express= require('express');
const bodyparser=require('body-parser');
const app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactRoutes=require('./routes/contactus');
const successRoutes=require('./routes/success');

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);

app.use((req,res,next)=>{                      //for page not found we use status//
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(4000);





// ****************** 
// const express = require('express');
// const bodyparser = require('body-parser');
// const fs=require('fs');
// const app = express();

// app.use(bodyparser.urlencoded({extended:true}));
// app.get("/", (req, res) => {

//     return fs.readfile("username.txt",(err,data)=>{
//         if(err){
//             console.log(err);
//             data='No data exist';
//         }
//         res.send(
//             `${data}<form action="/" method="POST" onsubmit="document.getElementById("username").value=localstorage.getItem("username")><input type="text" name="message" id="message" ><input type="hidden" name="username" id="username"></br><button type="submit" >send</button></form>`
//         );
//     })
    
// });

// app.post("/", (req, res) => {
//     console.log(req.body.username);
//     console.log(req.body.message);
//     fs.writefile("username.txt", `${req.body.username}:${req.body.message}`, { flag: "a" }, (err) => err ? console.log(err) : res.redirect("/")
//     );
// });
// app.get("/login", (req, res) => {
//     res.send(
//         '<form action="login" method="POST" onsubmit="localstorage.setItem("username)><input type="text" name="username" plcaholder="username" id="username"><button type="submit">Send</button></form>'
//     )
// })
// app.listen(3000);

// const express= require('express');
// const bodyparser=require('body-parser');
// const app=express();

// const loginRoutes=require('./routes/login');
// const messageRoutes=require('./routes/message');

// app.use(bodyparser.urlencoded({extended:true}));

// app.use('/login',loginRoutes);
// app.use('/message',messageRoutes);

// app.use((req,res,next)=>{                      //for page not found we use status//
//     res.status(404).send('<h1>Page not found</h1>');
// })

// app.listen(3000);




// Group chat app 
// const express=require('express');

// const app=express();

// const routeAdmin=require('./routes/admin');

// const bodyParser=require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));


// app.use('/login',(req,res,next)=>{
   
//     res.send('<form action="/"  method="post"><input type="text" name="name" placeholder="Enter your name"><button type="submit">log in</button></form>')
    
// })
// app.use('/',(req,res,next)=>{
//     console.log(req.body)
//     res.send('<form action="/"  method="post"><input type="text" name="message" placeholder="type a message"><button type="submit">send</button></form>')
// })


// app.use(routeAdmin);

// app.post('/',(req,res,next)=>{
//     res.status(404).send('<h1>Error 404 This Page is Not Founded</h1>')
// })

// app.listen(3000);