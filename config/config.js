'use strict';

require('dotenv').config();

const config = {
	secret: process.env.SECRET || 'fleur-framework'
};

module.exports = config;