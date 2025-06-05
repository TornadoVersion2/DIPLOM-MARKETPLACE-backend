import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginateDto, SearchDto, TotalPagesDto } from './dto/paginate.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CategoriesService } from '../categories/categories.service'
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../role.enum';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.MANAGER)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Post('bulk')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN, Role.MANAGER)
  createMany(@Body() createProductsDto: { products: CreateProductDto[] }) {
    return this.productsService.createMany(createProductsDto.products);
  }

  @Get('/search')
  findByQuery(@Query() searchDto: SearchDto) {
    return this.productsService.search(searchDto.searchQuery.toLowerCase(), searchDto.currentPage, searchDto.itemsPerPage, searchDto.selectedCategoryId, searchDto?.filters)
  }

  @Get('/totalPages')
  getTotalPages(@Query() totalPagesDto: TotalPagesDto) {
    return this.productsService.getTotalPages(totalPagesDto.itemsPerPage)
  }

  @Get('/paginate')
  paginate(@Query() paginateDto: PaginateDto) {
    return this.productsService.paginate(paginateDto.currentPage, paginateDto.itemsPerPage)
  }


  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('product/:id')
  findOne(@Param('id') id: string) {
    console.log("id: ", id)
    return this.productsService.findOne(+id);
  }

  @Get('/manager/:id')
  productByManager(@Param('id') id: string) {
    console.log("managerId: ", id)
    return this.productsService.findByManager(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN, Role.MANAGER, Role.OWNER)
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN, Role.MANAGER, Role.OWNER)
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
} 