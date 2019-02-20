import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {Tournaments} from '../entities/tournaments.entity';
import {TournamentsService} from '../services/tournaments.service';
import {CreateTournamentDto} from '../payload/create-tournamentDTO';
import {AuthGuard} from '@nestjs/passport';

@Controller('Tournaments')
export class TournamentsController {
    constructor(private readonly tournamentService: TournamentsService) {
    }

    @Get()
    @UseGuards(AuthGuard('bearer'))
    getAll(): Promise<Tournaments[]> {
        return this.tournamentService.getAll();
    }

    @Post()
    @UseGuards(AuthGuard('bearer'))
    async create(@Body() createUserDto: CreateTournamentDto) {
        return this.tournamentService.create(createUserDto);
    }

    @Get(':id')
    @UseGuards(AuthGuard('bearer'))
    findOne(@Param('id') id) {
        return this.tournamentService.findOne(id);
    }

    @Get(':id/user')
    @UseGuards(AuthGuard('bearer'))
    findOneByUserId(@Param('id') id) {
        return this.tournamentService.findOneByUserId(id);
    }

    @Put(':id')
    @UseGuards(AuthGuard('bearer'))
    update(@Param('id') id, @Body() updateUserDto) {
        return this.tournamentService.update(id, updateUserDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('bearer'))
    remove(@Param('id') id) {
        return this.tournamentService.delete;
    }

    @Get(':id/stats')
    @UseGuards(AuthGuard('bearer'))
    getStatsForUser(@Param('id') id) {
        return this.tournamentService.getStatsForUser(id);
    }
}
