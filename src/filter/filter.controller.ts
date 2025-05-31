import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FilterService } from './filter.service';
import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { CreateFilterProductDto } from './dto/create-filter-product.dto';
import { UpdateFilterProductDto } from './dto/update-filter-product.dto';
import { Roles } from '../auth/decorators/roles.decorator'
import { Role } from '../role.enum'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@Controller('filter')
export class FilterController {
  constructor(private readonly filterService: FilterService) { }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.MANAGER)
  @Post()
  create(@Body() createFilterDto: CreateFilterDto) {
    return this.filterService.create(createFilterDto);
  }

  @Get()
  findAll() {
    return this.filterService.findAll();
  }

  @Get('/filter/:id')
  findOne(@Param(':id') id: string) {
    return this.filterService.findOne(+id);
  }

  @Get('/category/:categoryId')
  findByCategory(@Param('categoryId') categoryId: string) {
    return this.filterService.findByCategory(+categoryId)
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.MANAGER)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilterDto: UpdateFilterDto) {
    return this.filterService.update(+id, updateFilterDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.MANAGER)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filterService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.MANAGER)
  @Post('/product')
  createFilterProduct(@Body() createFilterProductDto: CreateFilterProductDto) {
    return this.filterService.createProductFilter(createFilterProductDto);
  }

  @Get('/product')
  findFiilterProduct() {
    return this.filterService.findAllProductFilter();
  }

  @Get('/product/:id')
  findOneFilterProduct(@Param('id') id: string) {
    return this.filterService.findOneProductFilter(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.MANAGER)
  @Patch('/product/:id')
  updateFilterProduct(@Param('id') id: string, @Body() updateFilterProductDto: UpdateFilterProductDto) {
    return this.filterService.updateProductFilter(+id, updateFilterProductDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.MANAGER)
  @Delete('/product/:id')
  removeFilterProduct(@Param('id') id: string) {
    return this.filterService.removeProductFilter(+id);
  }
}
