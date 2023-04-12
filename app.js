// node .js


// // import http from 'http';
// const http =require('http');
// const routes =require('./h8routes');
// console.log(routes.someText);
// const server = http.createServer(routes.handler);
// server.listen(3000);


// //Express.js
// const express =require('express');
// const bodyparser=require('body-parser');
// const app =express();
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


// Express routing 
const express =require('express');
const bodyparser=require('body-parser');

const app =express();

const adminRoutes=require('./routes/admin.js');
const shopRoutes=require('./routes/shop.js');

app.use(bodyparser.urlencoded({extended:true})); //for parsing form 

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000);