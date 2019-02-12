import {Body, Controller, Get, Post, Param, Put, Delete, UseGuards, HttpStatus, Res} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {UserService} from '../services/user.service';
import {Users} from '../entities/users.entity';
import {CreateUserDto} from '../payload/create-userDTO';
import {LoginUserDto} from '../payload/login-userDTO';

@Controller('Users')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    @UseGuards(AuthGuard('bearer'))
    getAll(): Promise<Users[]> {
        return this.userService.getAll();
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Post('/login')
    async login(@Res() res, @Body() loginUserDto: LoginUserDto) {
        const token = await this.userService.login(loginUserDto);
        console.log(token);
        if (token) {
            res.status(HttpStatus.OK).send(token);
        } else {
            res.status(HttpStatus.UNAUTHORIZED).send();
        }

    }

    @Get(':id')
    @UseGuards(AuthGuard('bearer'))
    findOne(@Param('id') id) {
        return this.userService.findOne(id);
    }

    @Put(':id')
    @UseGuards(AuthGuard('bearer'))
    update(@Param('id') id, @Body() updateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('bearer'))
    remove(@Param('id') id) {
        return this.userService.delete;
    }
}
