import {Injectable, Inject} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Tournaments} from '../entities/tournaments.entity';
import {CreateTournamentDto} from '../payload/create-tournamentDTO';

@Injectable()
export class TournamentsService {
    constructor(@InjectRepository(Tournaments)
                private readonly tournamentRepository: Repository<Tournaments>) {
    }

    async getAll(): Promise<Tournaments[]> {
        return await this.tournamentRepository.find();
    }

    async create(body: CreateTournamentDto): Promise<Tournaments> {
        return await this.tournamentRepository.save(body);
    }

    async findOne(id: number) {
        return await this.tournamentRepository.findOne(id);
    }

    async findOneByUserId(id: number) {
        return await this.tournamentRepository.find({
            where: {
                user: {
                    id
                }
            }
        })
    }

    async getStatsForUser(id: number) {
        let resTour = [];
        let tournamentList = await this.tournamentRepository.find(
            {
                where: {
                    user: {
                        id
                    }
                }
            }
        );
        tournamentList.sort((tournament, tournamentBis) => {
            return new Date(tournament.createdAt).getTime() - new Date(tournamentBis.createdAt).getTime();
        });
        tournamentList.forEach(tournament => {
            if (resTour.length === 0) {
                resTour.push({gain: tournament.difference, date: tournament.createdAt});
            } else {
                resTour.push({gain: resTour.slice(-1)[0].gain + tournament.difference, date: tournament.createdAt});
            }
        });
        console.log(resTour);
        return tournamentList;
    }

    async update(id: number, data: object) {
        return await this.tournamentRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.tournamentRepository.delete(id);
    }
}
