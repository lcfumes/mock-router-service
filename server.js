'use strict';

const Hapi = require('hapi');

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