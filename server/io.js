var app = require('./app');
var server = require('http').Server(app);

server.listen(8081);

module.exports = require('socket.io')(server);