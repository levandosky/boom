var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(9999);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('Socket connected:', socket.id);

  //socket.emit('action', { type: 'SET_USER', payload: {currentUser: 'lewy'} });

  socket.on('action', (action) => {
    console.log("Get new server action");

    if(action.type === 'SERVER/GET_USER') {
      socket.emit('action', { type: 'SET_USER', payload: {currentUser: 'dupa'} });
    }

  })
});
