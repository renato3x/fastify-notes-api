import { PrismaClient } from '@prisma/client';
import { ServerError } from '../errors/server-error';

export class NotesService {
  static client = new PrismaClient;

  static async getAll() {
    return await this.client.note.findMany();
  }

  static async getById(id) {
    if (isNaN(id)) {
      throw new ServerError(400, 'Id is invalid');
    }

    const note = await this.client.note.findFirst({
      where: {
        id,
      },
    });

    if (!note) {
      throw new ServerError(404, 'Note not found');
    }

    return note;
  }

  static async create(data) {
    if (!data.title) {
      throw new ServerError(400, '"title" field is required');
    }

    return await this.client.note.create({ data });
  }

  static async update(id, data) {
    if (isNaN(id)) {
      throw new ServerError(400, 'Id is invalid');
    }

    if (data.id) {
      delete data.id;
    }

    return await this.client.note.update({
      where: {
        id,
      },
      data,
    });
  }

  static async delete(id) {
    if (isNaN(id)) {
      throw new ServerError(400, 'Id is invalid');
    }

    const noteExists = await this.client.note.findFirst({
      where: {
        id,
      }
    });

    if (noteExists) {
      return await this.client.note.delete({
        where: {
          id,
        },
      });
    }
    
    return null;
  }
}
