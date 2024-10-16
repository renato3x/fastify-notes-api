import fastify from 'fastify';
import { errorHandler } from './handlers/error-handler';
import { appRoutes, notesRoutes } from './routes';
import cors from '@fastify/cors';

const app = fastify({
  logger: true,
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
        ignore: 'pid,hostname',
      },
    },
  },
});

app.setErrorHandler(errorHandler);
app.register(cors);
app
  .register(appRoutes, { prefix: '/v1' })
  .register(notesRoutes, { prefix: '/v1' });

export default app;
