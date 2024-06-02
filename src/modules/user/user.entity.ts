
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('user')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('text')
    email: string;

    @Column()
    password: string;

    @Column({ default: 1 })
    status: boolean;
}