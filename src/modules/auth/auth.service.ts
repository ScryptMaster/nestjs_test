import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private UserService: UserService) {}

  async validateUserCreds(email: string, password: string): Promise<any> {
    const user = await this.UserService.getUseryEmail(email);

    if (!user) throw new BadRequestException();

    console.log(await !bcrypt.compare(password, user.password));
    if (await !bcrypt.compare(password, user.password))
      throw new UnauthorizedException();

    return user;
  }
}
