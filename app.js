// node .js


// // import http from 'http';
// const http =require('http');

// const routes =require('./h8routes');

// console.log(routes.someText);

// const server = http.createServer(routes.handler);

// server.listen(3000);



const express =require('express');

const app =express();

app.use((req,res,next)=>{
    console.log('In the middleware');
    next(); //allows the request to continue to the middleware to line
});


app.use((req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);