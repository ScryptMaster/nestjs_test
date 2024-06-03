import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RolesController } from './modules/roles/roles.controller';

import { AppService } from './app.service';
import { RolesService } from './modules/roles/roles.service';

import { UserModule } from './modules/user/user.module';
import { RolesModule } from './modules/roles/roles.module'

import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
