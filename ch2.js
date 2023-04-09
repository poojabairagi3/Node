import http from 'http';
// const http=require ('http');
const server=http.createServer((req,res)=>{
   
    if(req.url==='/home') {
        console.log(' Welcome home');
    }else if(req.url==='/about'){
        console.log('Welcome to About Us page');
    }else if(req.url==='/node'){
        console.log('Welcome to my Node Js project');
    }else{
        console.log('nice');
    }
    
    // res.write('<head><title>Leela web dev</title></head>');
    // res.write('<body><h1>Welcome to my Node Js project"</h1></body>');
    // res.end('</html>');
});
server.listen(3000);

