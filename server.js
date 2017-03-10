'use strict';

const Hapi = require('hapi');

const env = process.env.NODE_ENV;
if (env == undefined) {
  console.log("NODE_ENV not defined");
  process.exit();
}

global.Config = require('./config/config.' + env + '.json');

const server = new Hapi.Server();
server.connection({ port: 3030, routes: { cors: true }});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply({
          headers: request.headers,
          params: request.params,
          query_params: request.query,
          payload: request.payload
        });
    }
});

server.start( (err) => {
 if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`);
});