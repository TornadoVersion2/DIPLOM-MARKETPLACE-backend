import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FilterProductService } from './filter-product.service';
import { CreateFilterProductDto } from './dto/create-filter-product.dto';
import { UpdateFilterProductDto } from './dto/update-filter-product.dto';
import { Roles } from '../auth/decorators/roles.decorator'
import { Role } from '../role.enum'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@Controller('filter')
export class FilterProductController {
  constructor(private readonly FilterProductService: FilterProductService) { }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.MANAGER)
  @Post('/product')
  createFilterProduct(@Body() createFilterProductDto: CreateFilterProductDto) {
    return this.FilterProductService.createProductFilter(createFilterProductDto);
  }

  @Get('/product')
  findFiilterProduct() {
    return this.FilterProductService.findAllProductFilter();
  }

  @Get('/product/:id')
  findOneFilterProduct(@Param('id') id: string) {
    return this.FilterProductService.findOneProductFilter(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.MANAGER)
  @Patch('/product/:id')
  updateFilterProduct(@Param('id') id: string, @Body() updateFilterProductDto: UpdateFilterProductDto) {
    return this.FilterProductService.updateProductFilter(+id, updateFilterProductDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.MANAGER)
  @Delete('/product/:id')
  removeFilterProduct(@Param('id') id: string) {
    return this.FilterProductService.removeProductFilter(+id);
  }
}
