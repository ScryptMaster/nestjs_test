import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserDto } from './user.dto';
import { NotFoundException } from '@nestjs/common';
import { User } from './user.entity';


@Injectable()
export class UserService {
  constructor(@InjectRepository(UserRepository) private userRepository: UserRepository) { }

  async getUser() {
    return await this.userRepository.find();
  }

  async saveUser(req: UserDto) {
    return await this.userRepository.save(req);
  }

  async getOneUser(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async updateUser(id: number, updateUserDto: UserDto): Promise<User> {
    const user = await this.getOneUser(id);
    Object.assign(user, updateUserDto);
    return await this.userRepository.save(user);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.getOneUser(id);
    await this.userRepository.remove(user);
  }
}
