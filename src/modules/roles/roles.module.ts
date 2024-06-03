import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesRepository } from './roles.repository';
import { Roles } from './roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Roles])],
  controllers: [RolesController],
  providers: [RolesService, RolesRepository],
})

export class RolesModule { }
