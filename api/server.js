// build your server here and require it from index.js
const express = require('express');
const helmet = require('helmet');
//router imports when written.
//Project Router.
//Resources Router.
//Tasks Router.

const server = express();
//create instance;

server.use(helmet());
//adds https headers to express - security measure.

server.use(express.json())
//teaches express to parse payloads as JSON.

//insert calls to each router and route here.

// ADD ROUTER NAMES BELOW BEFORE UNCOMMENTING //

// server.use('/api/projects', routerName)
// server.use('/api/resources', routerName)
// server.use('/api/tasks', routerName)

module.exports = server;