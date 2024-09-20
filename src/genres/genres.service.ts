/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GenresService {
  constructor(private configService: ConfigService) {}

  async getGenres() {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
        headers: {
          Authorization: `Bearer ${this.configService.get('TMDB_READ_ACCESS_TOKEN')}`,
        },
        params: {
          api_key: this.configService.get('TMDB_API_KEY'),
        },
      });
      return response.data; // Ensure this matches what your frontend expects
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new HttpException('Failed to fetch genres', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
