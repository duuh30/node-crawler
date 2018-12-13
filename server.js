'use strict';
const app     = require('./src/app');
const debug   = require('debug')('balta:server');
const http    = require('http');
const server = http.createServer(app);

const port = 3000;
server.listen(port);
