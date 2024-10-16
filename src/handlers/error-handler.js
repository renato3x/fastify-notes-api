import { ServerError } from '../errors/server-error';
import app from '../app';

export function errorHandler(error, _request, reply) {
  app.log.error(error);

  if (error instanceof ServerError)   {
    return reply
      .status(error.statusCode)
      .send({
        message: error.message,
        code: error.statusCode,
      });
  }

  return reply
    .status(500)
    .send({
      message: 'Unexpected error has occurred',
      code: 500,
    });
}
