import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FilterService } from './filter.service';
import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
// import { CreateFilterProductDto } from './dto/create-filter-product.dto';
// import { UpdateFilterProductDto } from './dto/update-filter-product.dto';
import { Roles } from '../auth/decorators/roles.decorator'
import { Role } from '../role.enum'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@Controller('filter')
export class FilterController {
  constructor(private readonly filterService: FilterService) { }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.MANAGER, Role.ADMIN)
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

  @Get('/prod/:productId')
  findByProduct(@Param('productId') productId: string) {
    return this.filterService.findByProduct(+productId)
  }

  @Get('/prod/description/:productId')
  findDescriptionByProduct(@Param('productId') productId: string) {
    return this.filterService.findDescriptionByProduct(+productId)
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


}
