import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: {
        name: createProductDto.name,
        description: createProductDto.description,
        price: createProductDto.price,
        quantity: createProductDto.quantity,
        imageUrl: createProductDto.imageUrl,
        isActive: createProductDto.isActive ?? true,
        category: {
          connect: {
            id: createProductDto.categoryId
          }
        },
        manager: {
          connect: {
            id: createProductDto.managerId
          }
        }
      },
      include: {
        category: true,
        manager: true
      }
    });
  }

  async findAll() {
    return this.prisma.product.findMany({
      include: {
        category: true,
        manager: true
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
        manager: true
      }
    });
  }

  async findByManager(managerId: number) {
    return this.prisma.product.findMany({
      where: { managerId: managerId },
      include: {
        category: true,
        manager: true
      }
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: {
        name: updateProductDto.name,
        description: updateProductDto.description,
        price: updateProductDto.price,
        quantity: updateProductDto.quantity,
        imageUrl: updateProductDto.imageUrl,
        isActive: updateProductDto.isActive,
        category: updateProductDto.categoryId ? {
          connect: {
            id: updateProductDto.categoryId
          }
        } : undefined,
        manager: updateProductDto.managerId ? {
          connect: {
            id: updateProductDto.managerId
          }
        } : undefined
      },
      include: {
        category: true,
        manager: true
      }
    });
  }

  async remove(id: number) {
    return this.prisma.product.delete({
      where: { id }
    });
  }

  async createMany(products: CreateProductDto[]): Promise<{ count: number }> {
    return this.prisma.product.createMany({
      data: products,
      skipDuplicates: true,
    });
  }
} 