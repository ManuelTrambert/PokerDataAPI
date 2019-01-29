import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    username: string;

    @Column({length: 500})
    password: string;

    @Column({length: 500})
    salt: string;

    @Column({length: 500})
    email: string;

    @Column({length: 500})
    token: string;

    @Column({length: 500})
    firstname: string;

    @Column({length: 500})
    lastname: string;
}