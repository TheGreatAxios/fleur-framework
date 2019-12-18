'use strict';

module.exports = (app) => {
	// Client Routes ONLY
	let index = require('./components/index/index');
	
	// Add Routes
	let routes = [index];

	app.use('/', routes);
}