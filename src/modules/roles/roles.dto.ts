import { IsNotEmpty, IsEmail, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RolesDto {
  created_at: boolean;
  updated_at: boolean;

  @ApiProperty({ description: 'Name of the role' })
  @IsNotEmpty({ message: 'Name is required..!' })
  @Length(3, 255)
  name: string;


  @ApiProperty({ description: 'Display Name of the role' })
  @IsNotEmpty({ message: 'Display Name is required..!' })
  @Length(3, 255)
  display_name: string;


  @ApiProperty({ description: 'Permission of the role' })
  permission: string;


  @ApiProperty({ description: 'Status of the role' })
  status: boolean;
}