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
import { RolesService } from './roles.service';
import { RolesDto } from './roles.dto';
import { Roles } from './roles.entity';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) { }

    @Get()
    getUser() {
        return this.rolesService.getRole();
    }

    @Get(':id')
    async getUserById(@Param('id') id: number): Promise<Roles> {
        return await this.rolesService.getOneRole(id);
    }

    @Post('/')
    @HttpCode(200)
    @ApiParam({ name: 'Name', required: false, description: 'Name of the role' })
    @ApiParam({ name: 'Display Name', required: true, description: 'Display Name of the role' })
    @ApiParam({ name: 'Permission', required: true, description: 'Permission of the role' })
    async saveUser(@Body() req: RolesDto) {
        return await this.rolesService.saveRole(req);
    }

    @Put(':id')
    async updateRole(
        @Param('id') id: number,
        @Body() updateRolesDto: RolesDto,
    ): Promise<Roles> {
        return await this.rolesService.updateRole(id, updateRolesDto);
    }

    @Delete(':id')
    async deleteRole(@Param('id') id: number): Promise<void> {
        return await this.rolesService.deleteRole(id);
    }
}
