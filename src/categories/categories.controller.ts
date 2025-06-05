import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../role.enum';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN, Role.MANAGER)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Post('bulk')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN, Role.MANAGER)
  createMany(@Body() createCategoriesDto: { categories: CreateCategoryDto[] }) {
    return this.categoriesService.createMany(createCategoriesDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get('category/:categoryId')
  findOne(@Param('categoryId') categoryId: string) {
    return this.categoriesService.findOne(+categoryId);
  }

  @Get('search/:searchQuery')
  search(@Param('searchQuery') searchQuery: string) {
    console.log(searchQuery)
    return this.categoriesService.search(searchQuery);
  }

  @Get('manager/:managerId')
  findOneByManager(@Param('managerId') managerId: string) {
    return this.categoriesService.findByManager(+managerId);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN, Role.MANAGER)
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN, Role.MANAGER)
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
} 