import { IsNotEmpty, IsEmail, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ description: 'Name of the user' })
  @IsNotEmpty({ message: 'Name is required..!' })
  @Length(3, 255)
  name: string;


  @ApiProperty({ description: 'Email of the user' })
  @IsNotEmpty({ message: 'Email is required..!' })
  @IsEmail({}, { message: 'Invalid email address..!' })
  @Length(3)
  email: string;


  @ApiProperty({ description: 'Password of the user' })
  @IsNotEmpty({ message: 'Password is required..!' })
  @Length(6, 20, { message: 'Password must be between 6 and 20 characters..!' })
  password: string;


  @ApiProperty({ description: 'Status of the user' })
  status: boolean;
}
