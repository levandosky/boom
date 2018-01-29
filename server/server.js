var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

import actions from './actions';

server.listen(9999);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('Socket connected:', socket.id);

  socket.on('action', (action) => {
    actions(action, io, socket);
  });
});
