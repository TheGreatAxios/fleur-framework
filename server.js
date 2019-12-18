'use strict';

const app = require('./app');

const portConfig = require('./config/port');

const PORT = portConfig.port;

let ENV;

if (app.get('env') === 'development') {
	ENV = 0;
} else {
	ENV = 1;
}
app.listen(PORT, (err) => {
	if (err) {
		if (ENV == 0) {
			console.log('LiliusWell Error: ' + err);
		}
		return server.status(0);
	} else {
		console.log('Fleur Framework listening on PORT: ' + PORT);
	}
});