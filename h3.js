// const http =require('http');
import http from 'http';
const server = http.createServer((req,res)=>{
    const url =req.url;
    if (url==='/'){
        res.write('<html');
        res.write('<head><title>Enter Msg</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project!</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);