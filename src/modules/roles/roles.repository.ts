import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Roles } from './roles.entity';

@Injectable()
export class RolesRepository extends Repository<Roles> {
    constructor(private dataSource: DataSource) {
        super(Roles, dataSource.createEntityManager());
    }
}
