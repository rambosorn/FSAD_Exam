//const socket = new WebSocket('ws://localhost:8080');
//socket.onmessage = ({ data }) => {
//    console.log('Message from server ', data);
//   };
//   document.querySelector('button').onclick = () => {
//    socket.send('whatever you write here that will be visible in the console');
 //  }
 const socket = io('ws://localhost:3000');
 socket.on('message', text => {
  const el = document.createElement('li');
  el.innerHTML = text;
  document.querySelector('ul').appendChild(el)
 });
 document.querySelector('button').onclick = () => {
  const text = document.querySelector('input').value;
  socket.emit('message', text)
 } 
