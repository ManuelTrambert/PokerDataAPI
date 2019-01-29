import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentsController } from '../controllers/tournaments.controller';
import { Tournaments } from '../entities/tournaments.entity';
import {TournamentsService} from '../services/tournaments.service';

@Module({
    imports: [TypeOrmModule.forFeature([Tournaments])],
    providers: [TournamentsService],
    controllers: [TournamentsController],
})
export class TournamentsModule {
}
