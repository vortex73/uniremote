const router = require('./router');
const config = require('config');
const express = require('express');
const contparser = require('body-parser')
const cookies = require('cookie-parser')
const path = require('path');

app = express();

app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'));

app.use(contparser.json());
app.use(cookies());

app.use(express.static(path.join(__dirname,"assets")));

app.use('/', router); // express router

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/assets/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts'));

app.locals.devices = config.get('devices');
app.locals.colWidth = Math.floor(12 / Object.keys(app.locals.devices).length);

module.exports = app;
