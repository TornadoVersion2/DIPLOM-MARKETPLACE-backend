import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateProductDto, Product } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginateDto } from './dto/paginate.dto';
import { Prisma } from '@prisma/client';
import { Filter } from '../filter/dto/create-filter.dto'
import { CategoriesService } from '../categories/categories.service'
import { FilterService } from '../filter/filter.service';
import { filter } from 'rxjs';
import { FilterProduct } from 'src/filter/dto/create-filter-product.dto';


@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService,
    private categoriesService: CategoriesService,
    private filterService: FilterService) { }

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

  async getTotalPages(itemsPerPage: number = 10) {
    return Math.ceil(await this.prisma.product.count() / itemsPerPage)
  }

  async getTotalProducts() {
    return this.prisma.product.count()
  }

  async filtrate(filters: { [key: string]: string }) {

  }

  // async findFilters(filters: Filter[]): Promise<FilterProduct[]> {
  //   return this.prisma.filter_Product.findMany({
  //     where: { filterId: { in: filters.map(filter => filter.id) } }
  //   })
  // }

  // async findProductsByFilters(filters: FilterProduct[]): Promise<Product[]> {
  //   return this.prisma.product.findMany({
  //     where: { id: { in: filters.map(filter => filter.productId) } }
  //   })
  // }

  async search(searchQuery: string, currentPage: number, itemsPerPage: number, selectedCategoryId?: number, filters?: Filter[]) {
    // console.log("searchQuery: ", searchQuery)
    // console.log("selectedCategoryId: ", selectedCategoryId)
    let whereFilter: Prisma.ProductWhereInput
    if (selectedCategoryId > 0 && filters) {
      whereFilter = {
        id: {
          in: (await this.prisma.filter_Product.findMany({
            where: { filterId: { in: filters.map(filter => filter.id) } }
          })).map(filter => filter.productId)
        }
      }
    }

    let whereQueryAndCategory: Prisma.ProductWhereInput

    if (searchQuery != '') {
      if (selectedCategoryId === 0) {
        whereQueryAndCategory = {
          OR: [
            { name: { contains: searchQuery, mode: 'insensitive' } },
            { description: { contains: searchQuery, mode: 'insensitive' } },
          ]
        }
      }
      else {
        whereQueryAndCategory = {
          AND: [{
            OR: [
              { name: { contains: searchQuery, mode: 'insensitive' } },
              { description: { contains: searchQuery, mode: 'insensitive' } },
            ]
          },
          { categoryId: selectedCategoryId },
          ]
        }
      }
    }
    else if (selectedCategoryId === 0) {
      return {
        products: await this.paginate(currentPage, itemsPerPage), totalProducts: await this.getTotalProducts()
      }
    } else {
      whereQueryAndCategory = {
        categoryId: selectedCategoryId
      }
    }

    console.log("Final Where: ", {
      ...whereQueryAndCategory,
      ...whereFilter
    })
    const [products, totalProducts] = await Promise.all([
      this.prisma.product.findMany({
        where: {
          ...whereQueryAndCategory,
          ...whereFilter
        },
        skip: itemsPerPage * (currentPage - 1),
        take: itemsPerPage,
        include: {
          category: true,
          manager: true
        }
      }),
      this.prisma.product.count({
        where: {
          ...whereQueryAndCategory,
          ...whereFilter
        }
      })
    ]);
    return { products, totalProducts }
  }

  async paginate(currentPage: number, itemsPerPage: number) {
    return this.prisma.product.findMany({
      skip: itemsPerPage * (currentPage - 1),
      take: itemsPerPage,

      include: {
        category: true,
        manager: true
      }
    })
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