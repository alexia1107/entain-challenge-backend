/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MoviesService {
  constructor(private configService: ConfigService) {}

  async getPopularMovies() {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/popular',
        {
          headers: {
            Authorization: `Bearer ${this.configService.get('TMDB_READ_ACCESS_TOKEN')}`,
          },
          params: {
            api_key: this.configService.get('TMDB_API_KEY'),
          },
        },
      );
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new HttpException(
        'Failed to fetch popular movies',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async searchMovies(query: string) {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        {
          headers: {
            Authorization: `Bearer ${this.configService.get('TMDB_READ_ACCESS_TOKEN')}`,
          },
          params: {
            api_key: this.configService.get('TMDB_API_KEY'),
            query,
          },
        },
      );
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new HttpException(
        'Failed to search movies',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getMoviesByGenre(genreId: number) {
    try {
      const apiKey = this.configService.get('TMDB_API_KEY');
      const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&api_key=${apiKey}`;

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
      throw new HttpException(
        'Failed to fetch movies by genre',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
