var http = require('http');
var SERVER_PORT = '1234';

var app = http.createServer().listen(SERVER_PORT);

var io = require('socket.io').listen(app);

io.sockets.on('connection', function(socket) {

    socket.on('message', function(message) {
        socket.broadcast.emit('message', message); // should be room only
    });
    
});