//server.on('connection', socket => {
//    socket.on('message', message => {
//    socket.send(`Roger that! ${message}`);
//    });
//   }); 

//new replacement
//const WebSocket = require('ws')
//const server = new WebSocket.Server({ port: '3000' }) 
//const http = require('http').createServer();
//const io = require('socket.io')(http, {
 cors: { origin: "*" }
//});

//io.on('connection', (socket) => {
//    console.log('a user connected')

//    socket.on('message', (message) => {
//        console.log(message);
//        io.emit('message', `${socket.id.substr(0,2)} said ${message}` );
//        });
 //      });
 const http = require('http').createServer();
 const io = require('socket.io')(http, {
   cors: { origin: "*" }
 });
 
 io.on('connection', (socket) => {
     console.log('a user connected');
 
     socket.on('message', (message) => {
         console.log(message);
         io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
     });
 });
 
 http.listen(3000, () => {
     console.log('Server is running on port 3000');
 });
 



