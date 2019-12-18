'use strict';

// Deps
const express = require('express');
const compression = require('compression');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Gulp Setup (SCSS/SASS)
const sass = require('node-sass-middleware');

sass.compiler = require('node-sass');

// Config
const config = require('./config/config');

// Init App
const app = module.exports = express();

// App Setup
app.use(logger('dev'));

// Format Data as JSON 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// View Engine
app.set('view engine', 'pug');
app.set('views', [__dirname, './client/views']);

// Sass
app.use(sass({
	src: path.join(__dirname, 'public'),
	dest: path.join(__dirname, 'public')
}));


// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Client
require('./client/index')(app);
// Compression
app.use(compression());

// Server 500 Handler
app.use((err, req, res, next) => {
	res.status(500).send('Server Error (500): ' + err);
});

module.exports = app;