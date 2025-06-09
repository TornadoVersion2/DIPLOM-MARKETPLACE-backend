import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateFilterProductDto } from './dto/create-filter-product.dto';
import { UpdateFilterProductDto } from './dto/update-filter-product.dto';

@Injectable()
export class FilterProductService {
  constructor(private prisma: PrismaService) { }
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
