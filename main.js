// Import Node.js core module i.e http
var http = require('http');
var fs = require('fs');

var path = require('path');
var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/static'))

app.get('/', function(req, res){
	fs.readFile(__dirname + "/index.html", function (err, pgres) {
							if (err)
									res.write("HOME.HTML NOT FOUND");
							else {
									res.writeHead(200, { 'Content-Type': 'text/html' });
									res.write(pgres);
									res.end();
							}
					});
})

app.listen(process.env.PORT || 8000, ()=>console.log('Server running on port 8000'));
