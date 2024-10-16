import { NotesService } from '../services/notes-service';

export class NotesController {
  static async index(_request, reply) {
    const notes = await NotesService.getAll();
    return reply.status(200).send(notes);
  }

  static async findById(request, reply) {
    const { id } = request.params;
    const note = await NotesService.getById(parseInt(id));
    return reply.status(200).send(note);
  }

  static async create(request, reply) {
    const { body: data } = request;
    const note = await NotesService.create(data);
    return reply.status(201).send(note);
  }

  static async update(request, reply) {
    const { body: data } = request;
    const { id } = request.params;
    const updatedNote = await NotesService.update(parseInt(id), data);
    return reply.status(200).send(updatedNote);
  }

  static async delete(request, reply) {
    const { id } = request.params;
    const deletedNote = await NotesService.delete(parseInt(id));
    return reply.status(200).send(deletedNote);
  }
}
