import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser, IUserWithPassword } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { Role } from '../role.enum';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const existingUser = await this.findByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
    const { password, ...result } = user;
    return result as IUser;
  }
  async findByEmail(email: string): Promise<IUserWithPassword | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) return null;
    return {
      ...user,
      roles: user.roles as Role[]
    };
  }

  async findById(id: number): Promise<IUser> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    const { password, ...result } = user;
    return result as IUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<IUser> {
    await this.findById(id); // Check if user exists

    const data: any = { ...updateUserDto };
    if (updateUserDto.password) {
      data.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    const user = await this.prisma.user.update({
      where: { id },
      data,
    });
    const { password, ...result } = user;
    return result as IUser;
  }

  async delete(id: number): Promise<IUser> {
    await this.findById(id); 

    const user = await this.prisma.user.delete({
      where: { id },
    });
    const { password, ...result } = user;
    return result as IUser;
  }

  async createMany(users: CreateUserDto[]): Promise<{ count: number }> {
    const hashedUsers = await Promise.all(
      users.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, 10),
        roles: user.roles || [Role.USER]
      }))
    );

    return this.prisma.user.createMany({
      data: hashedUsers,
      skipDuplicates: true,
    });
  }
} 