import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
  async index(request: Request, response: Response): Promise<Response> {
    const songs = await knex.select().table('songs');

    return response.json(songs);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const song = await knex('songs').where('id', id).first();

    if (!song) {
      return response.status(400).json({ message: 'Song not found.' });
    }

    return response.json(song);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { filename } = request.file;
    const { author, song } = request.body;

    const newSong = {
      author,
      song,
      song_url: `http://localhost:3333/uploads/${filename}`,
    };

    await knex('songs').insert(newSong);

    return response.json(newSong);
  }
}

export default PointsController;
