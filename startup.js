#!/usr/bin/env node

var app = require('./main');
var http = require("http");

app.set('port',8008);

var server = http.createServer(app);
server.listen(8008);

