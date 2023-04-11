// import http from 'http';
const http =require('http');

const routes =require('./h8routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);