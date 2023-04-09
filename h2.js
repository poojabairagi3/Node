import http from 'http';
// const http=require ('http');
const server=http.createServer((req,res)=>{
   
    if(req.url==='/home') {
        console.log('Welcome home');
    }else if(req.url==='/about'){
        console.log('Welcome to About Us page');
    }else if(req.url==='/node'){
        console.log('Welcome to my Node Js project');
    }else{
        console.log('nice');
    }
    
});
server.listen(3000);
