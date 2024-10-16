export async function appRoutes(fastify, _options) {
  fastify.get('/', async (_request, reply) => {
    return reply.redirect('http://localhost:3000/v1/notes');
  });
}
