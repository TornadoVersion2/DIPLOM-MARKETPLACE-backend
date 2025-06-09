import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilterDescriptionService } from './filter-description.service';
import { CreateFilterDescriptionDto } from './dto/create-filter-description.dto';
import { UpdateFilterDescriptionDto } from './dto/update-filter-description.dto';

@Controller('filter/filter-description')
export class FilterDescriptionController {
  constructor(private readonly filterDescriptionService: FilterDescriptionService) {}

  @Post()
  create(@Body() createFilterDescriptionDto: CreateFilterDescriptionDto) {
    return this.filterDescriptionService.create(createFilterDescriptionDto);
  }

  @Get()
  findAll() {
    return this.filterDescriptionService.findAll();
  }

  @Get('/category/:id')
  findByCategory(@Param('id') id: string) {
    return this.filterDescriptionService.findByCategory(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filterDescriptionService.findOne(+id);
  }

  @Get('name/:name')
  findByName(@Param('name') name: string) {
    return this.filterDescriptionService.findByName(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilterDescriptionDto: UpdateFilterDescriptionDto) {
    return this.filterDescriptionService.update(+id, updateFilterDescriptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filterDescriptionService.remove(+id);
  }
}
