import io from 'socket.io-client';

module.exports = io.connect('http://localhost:8081');