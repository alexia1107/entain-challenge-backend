/* eslint-disable prettier/prettier */

// eslint-disable-next-line prettier/prettier
import { Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('api/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('popular')
  async getPopularMovies() {
    return this.moviesService.getPopularMovies();
  }

  @Get('search')
  async searchMovies(@Query('query') query: string) {
    return this.moviesService.searchMovies(query);
  }

  @Get('genre')
  async getMoviesByGenre(@Query('genreId') genreId: number) {
    return this.moviesService.getMoviesByGenre(genreId);
  }
}
