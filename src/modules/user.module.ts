import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { Users } from '../entities/users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {
}
