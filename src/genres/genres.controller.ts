/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { GenresService } from './genres.service';

@Controller('api/genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Get()
  async getGenres() {
    return this.genresService.getGenres();
  }
}
