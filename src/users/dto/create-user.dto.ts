import { IsEmail, IsString, IsOptional, MinLength, IsArray, IsEnum } from 'class-validator';
import { Role } from '../../role.enum';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsArray()
  @IsEnum(Role, { each: true })
  @IsOptional()
  roles?: Role[];
} 