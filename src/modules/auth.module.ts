import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { HttpStrategy } from '../services/http.strategy';
import { UserModule } from './user.module';
import {UserService} from '../services/user.service';

@Module({
    imports: [UserModule],
    providers: [AuthService, HttpStrategy, UserService],
})
export class AuthModule {}