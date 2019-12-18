'use strict';

require('dotenv').config();

const portConfig = {
	port: process.env.PORT || 80
};

module.exports = portConfig;