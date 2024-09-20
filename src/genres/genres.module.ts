/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule], // Import ConfigModule to use configuration services
  controllers: [GenresController],
  providers: [GenresService],
})
export class GenresModule {}
