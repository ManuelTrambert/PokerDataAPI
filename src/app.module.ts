import {Module} from '@nestjs/common';
import {Connection} from 'typeorm';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from './modules/user.module';
import {TournamentsModule} from './modules/tournaments.module';
import {AuthModule} from './modules/auth.module';
import {Users} from './entities/users.entity';
import {Tournaments} from './entities/tournaments.entity';
import {PassportModule} from '@nestjs/passport';
import {UserService} from './services/user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Users, Tournaments]),
        TypeOrmModule.forRoot(),
        UserModule,
        TournamentsModule,
        AuthModule,
        PassportModule
    ],
    controllers: [],
    providers: [UserService],
})
export class AppModule {
    constructor(private readonly connection: Connection) {
    }
}
