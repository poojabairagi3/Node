// import fs from 'fs';
const fs =require("fs");
const requestHandler=(req,res)=>{
    const url =req.url;
    const method=req.method;
    if (url==='/'){
        res.write('<html');
        res.write('<head><title>Enter Msg</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk);
        });
        return req.on('end',()=>{
            const parsebody= Buffer.concat(body).toString();
            const message=parsebody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
            }); 
        });
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project!</h1></body>');
    res.write('</html>');
    res.end();

};

// module.exports = requestHandler;

// module.exports={
//     handler:requestHandler,
// someText:'some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText='Some hard coded text';

exports.handler = requestHandler;
exports.someText='Some hard coded text';

