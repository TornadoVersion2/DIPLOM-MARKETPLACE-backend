import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './interfaces/user.interface';
import { Role } from '../role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.usersService.create(createUserDto);
  }

  // @Post('bulk')
  // async createMany(@Body() users: CreateUserDto[]) {
  //   return this.usersService.createMany(users);
  // }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IUser> {
    return this.usersService.findById(+id);
  }


  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Get('manager/claim')
  async getManagerClaims(): Promise<IUser[]> {
    return this.usersService.findManagerClaims();
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Patch('manager/claim/:id')
  async claimManager(@Param('id') id: string): Promise<IUser> {
    return this.usersService.approveManager(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<IUser> {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IUser> {
    return this.usersService.delete(+id);
  }
} 