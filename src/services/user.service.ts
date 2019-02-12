import {Injectable, Inject} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Users} from '../entities/users.entity';
import {CreateUserDto} from '../payload/create-userDTO';
import {LoginUserDto} from '../payload/login-userDTO';

const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
    constructor(@InjectRepository(Users)
                private readonly userRepository: Repository<Users>) {
    }

    async getAll(): Promise<Users[]> {
        return await this.userRepository.find();
    }

    async create(body: CreateUserDto): Promise<Users> {
        if (!(await this.userRepository.findOne({email: body.email}))) {
            let user = {username: '', password: '', email: '', firstname: '', lastname: '', salt: ''};
            user.username = body.username;
            user.password = body.password;
            user.email = body.email;
            user.firstname = body.firstname;
            user.lastname = body.lastname;
            return bcrypt.hash(body.password, 10, async (err, hash) => {
                if (err) {
                    console.log(err);
                }
                user.password = hash;
                return await this.userRepository.save(user);
            });
        } else {
            return null;
        }
    }

    async login(body: LoginUserDto) {
        const user = await this.userRepository.findOne({username: body.username});
        if (user) {
            const compare = await bcrypt.compare(body.password, user.password)
            if (compare) {
                const hash = await bcrypt.hash('Le token de', 10);
                await this.userRepository.update(user.id, {token: hash});
                return {id: user.id, hash};
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    async findOneByToken(token: string) {
        return await this.userRepository.findOne({token});
    }

    async findOneByEmail(email: string) {
        return await this.userRepository.findOne({email});
    }

    async findOne(id: number) {
        return await this.userRepository.findOne(id);
    }

    async update(id: number, data: object) {
        return await this.userRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.userRepository.delete(id);
    }
}
