// const http =require('http');
import http from 'http'; 
import fs from 'fs';
//  if we want to use import then we have to set "type"="module" in json file
// const fs=require('fs');
const server = http.createServer((req,res)=>{
    const url =req.url;
    const method=req.method;
    if (url==='/'){
        fs.readFile("message.txt", {encoding: "utf-8"},(err,data)=>{
        if(err){
            console.log(err);
        }
        console.log('data from file' + data);
        res.write('<html');
        res.write('<head><title>Enter Msg</title></head>');
        res.write(`<body>${data}</body>`);
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    });
    }
    else if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk);   //array
        });
        return req.on('end',()=>{
            const parsebody= Buffer.concat(body).toString();
            const message=parsebody.split('=')[1];   //['message',Mrs.Pooja Ankit Yadav]
            fs.writeFile('message.txt',message,(err)=>{
                if(err){
                    console.log(err);
                }
                console.log('indise fs.writefile');
                res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
            }); 
        });
    }
    else{res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project!</h1></body>');
    res.write('</html>');
    res.end();
}
    
});
server.listen(3000);