const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('Client connected');
    socket.emit('hello', {test: 'test'});
});


app.listen(9999);
