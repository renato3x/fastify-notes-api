import { NotesController } from '../controllers/notes-controller';

export async function notesRoutes(fastify, _options) {
  fastify.get('/notes', NotesController.index);
  fastify.get('/notes/:id', NotesController.findById);
  fastify.post('/notes', NotesController.create);
  fastify.put('/notes/:id', NotesController.update);
  fastify.delete('/notes/:id', NotesController.delete);
}
