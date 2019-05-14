'use strict';

const express = require('express');
const http = require('http');
const socket = require('socket.io');
const SocketServer = require('./socket');

class Server{

	constructor(){
		this.port = 5000;
		this.host = 'localhost';
		this.app  = express();
		this.server = http.Server(this.app);
		this.socket = socket( this.server ); 
	}

	runServer(){

		new SocketServer( this.socket );

		this.server.listen(this.port , this.host , () => {
			console.log(`this server is running at http://${this.host}:${this.port}`);
		});
	}

}

const app = new Server();

app.runServer();