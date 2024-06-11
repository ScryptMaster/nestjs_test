import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.gaurd';
import { ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  @ApiParam({
    name: 'Email',
    required: false,
    description: 'Email is required',
  })
  @ApiParam({
    name: 'Password',
    required: false,
    description: 'Password is required',
  })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req): Promise<any> {
    return req.user;   
  }
}
