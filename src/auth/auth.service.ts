import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';
import { IUser } from '../users/interfaces/user.interface';
import { Role } from '../role.enum';
import { RegisterDto } from './dto/auth.dto';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Roles } from './decorators/roles.decorator';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) { }

  async authenticate(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {

      throw new UnauthorizedException('Неверный email или пароль');
    }

    const payload = {
      email: user.email,
      sub: user.id,
      roles: user.roles
    };

    return {
      access_token: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET }),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        roles: user.roles
      }
    };
  }

  async register(registerDto: RegisterDto) {
    try {
      const createUserDto: CreateUserDto = {
        email: registerDto.email,
        password: registerDto.password,
        name: registerDto.name,
        roles: [Role.USER]
      };
      const user = await this.usersService.create(createUserDto);
      const payload = {
        email: user.email,
        sub: user.id,
        roles: user.roles
      };

      return {
        access_token: this.jwtService.sign(payload),
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          roles: user.roles
        }
      };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new Error('Пользователь с таким email уже существует');
      }
      throw error;
    }
  }

  async registerManager(registerDto: RegisterDto) {
    try {
      const createUserDto: CreateUserDto = {
        email: registerDto.email,
        password: registerDto.password,
        name: registerDto.name,
        managerClaim: true,
        roles: [Role.USER]
      };
      const user = await this.usersService.create(createUserDto);
      const payload = {
        email: user.email,
        sub: user.id,
        roles: user.roles
      };

      return {
        access_token: this.jwtService.sign(payload),
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          roles: user.roles
        }
      };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new Error('Пользователь с таким email уже существует');
      }
      throw error;
    }
  }

  async approveManager(managerId: number) {
    var user = await this.usersService.findById(managerId);
    if (!user.managerClaim)
      throw new Error("Пользователь не пытается стать продавцом")
    try {
      user.roles = user.roles.filter((role) => role != Role.USER)
      user.roles.push(Role.MANAGER)
      user.managerClaim = false
      return this.usersService.update(managerId, user)
    }
    catch (error) {
      throw new Error('Ошибка при подтверждении продавца');
    }
  }
} 