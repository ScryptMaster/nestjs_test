import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesRepository } from './roles.repository';
import { RolesDto } from './roles.dto';
import { NotFoundException } from '@nestjs/common';
import { Roles } from './roles.entity';


@Injectable()
export class RolesService {
  constructor(@InjectRepository(RolesRepository) private RolesRepository: RolesRepository) { }

  async getRole() {
    return await this.RolesRepository.find();
  }

  async saveRole(req: RolesDto) {
    return await this.RolesRepository.save(req);
  }

  async getOneRole(id: number): Promise<Roles> {
    const role = await this.RolesRepository.findOne({ where: { id } });
    if (!role) {
      throw new NotFoundException(`Role with ID ${id} not found`);
    }
    return role;
  }

  async updateRole(id: number, updateRolesDto: RolesDto): Promise<Roles> {
    const role = await this.getOneRole(id);
    Object.assign(role, updateRolesDto);
    return await this.RolesRepository.save(role);
  }

  async deleteRole(id: number): Promise<void> {
    const role = await this.getOneRole(id);
    await this.RolesRepository.remove(role);
  }
}
