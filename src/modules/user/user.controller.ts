import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    HttpCode,
} from '@nestjs/common';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    getUser() {
        return this.userService.getUser();
    }

    @Get(':id')
    async getUserById(@Param('id') id: number): Promise<User> {
        return await this.userService.getOneUser(id);
    }

    @Post('/')
    @HttpCode(200)
    @ApiParam({ name: 'Status', required: false, description: 'Status of the user' })
    @ApiParam({ name: 'Password', required: true, description: 'Password of the user' })
    @ApiParam({ name: 'Email', required: true, description: 'Email of the user' })
    @ApiParam({ name: 'Name', required: true, description: 'Name of the user' })
    async saveUser(@Body() req: UserDto) {
        return await this.userService.saveUser(req);
    }

    @Put(':id')
    async updateUser(
        @Param('id') id: number,
        @Body() updateUserDto: UserDto,
    ): Promise<User> {
        return await this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number): Promise<void> {
        return await this.userService.deleteUser(id);
    }
}
