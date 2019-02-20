import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne} from 'typeorm';
import {Users} from './users.entity';

@Entity()
export class Tournaments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column()
    difference: number;

    @Column()
    type: string;

    @Column()
    pos: number;

    @Column()
    nbPlayers: number;

    @Column({type: 'timestamp'})
    createdAt: Date;

    @ManyToOne(type => Users)
    @JoinColumn()
    user: Users;
}
