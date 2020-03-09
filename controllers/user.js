'use strict'

var fs = require('fs'); // librería de NodeJS para trabajar con arvhivos
var path = require('path');

function home(req, res) {
	res.status(200).send({
		message: 'Hola Mundo desde el servidor de NodeJS'
	});
}

module.exports = {
    home
}