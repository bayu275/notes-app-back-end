const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const init = async () => {
  const server = Hapi.server({
    port: PORT,
    host: HOST,
    routes: {
      cors: { origin: ['*'] },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
