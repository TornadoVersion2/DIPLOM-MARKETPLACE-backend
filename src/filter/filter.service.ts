import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { CreateFilterProductDto } from './dto/create-filter-product.dto';
import { UpdateFilterProductDto } from './dto/update-filter-product.dto';

@Injectable()
export class FilterService {
  constructor(private prisma: PrismaService) { }

  async create(filter: CreateFilterDto) {
    if (filter.minValue > filter.maxValue) {
      throw Error("Минимальное значение больше максимального")
    }

    var sameCategoryFlters = await this.findByCategory(filter.categoryId)
    console.log(filter)
    console.log()

    sameCategoryFlters.forEach(filterSameCategory => {
      if (filterSameCategory.name === filter.name && (filterSameCategory.possibleValue === filter.possibleValue || filterSameCategory.isRanged && filter.isRanged))
        throw Error("Такой фильтр уже есть")
    });
    return this.prisma.filter.create({
      data: filter
    })
  }

  async findAll() {
    return this.prisma.filter.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }


  async findOne(id: number) {
    return this.prisma.filter.findUnique({
      where: {
        id
      }
    });
  }

  async findByCategory(categoryId: number) {
    return this.prisma.filter.findMany({
      where: {
        categoryId
      },
    });

  }

  async update(id: number, updateFilterDto: UpdateFilterDto) {
    return this.prisma.filter.update({
      where: {
        id
      },
      data: updateFilterDto,
    });
  }

  async remove(id: number) {
    return this.prisma.filter.delete({
      where: { id }
    });
  }

  async createProductFilter(createFilterProductDto: CreateFilterProductDto) {
    return this.prisma.filter_Product.create({
      data: createFilterProductDto,
    })
  }

  async findAllProductFilter() {
    return this.prisma.filter_Product.findMany({});
  }

  async findProductFilterByFilter(filterId: number) {
    return this.prisma.filter_Product.findMany({
      where: { filterId },
    });
  }

  async findBProductFilterByProduct(productId: number) {
    return this.prisma.filter_Product.findMany({
      where: { productId },
    });
  }

  async findOneProductFilter(id: number) {
    return this.prisma.filter_Product.findUnique({
      where: { id }
    });
  }

  async updateProductFilter(id: number, updateFilterProductDto: UpdateFilterProductDto) {
    return this.prisma.filter_Product.update({
      where: { id },
      data: updateFilterProductDto,
    });
  }

  async removeProductFilter(id: number) {
    return this.prisma.filter_Product.delete({
      where: { id }
    });
  }

  async removeProductFilterByFilter(id: number) {
    return this.prisma.filter_Product.delete({
      where: { id }
    });
  }

  async removeProductFilterByProduct(id: number) {
    return this.prisma.filter_Product.delete({
      where: { id }
    });
  }
}
