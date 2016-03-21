var app = require('./server/app');
var io = require('./server/io');
var express = require('express');

app.use('/public', express.static('public'));

io.on('connection', (socket) => {
	socket.emit('setup', [
		{ id: 1, title: 'One', body: 'body one'},
		{ id: 2, title: 'Two', body: 'body two'}
	]);

	socket.on('add', (article) => {
		socket.emit('new', article);
		socket.broadcast.emit('new', article);
	});
});

app.listen(8080);