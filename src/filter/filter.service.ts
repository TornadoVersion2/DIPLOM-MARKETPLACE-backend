import { Injectable, HttpException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { FilterDescriptionService } from 'src/filter-description/filter-description.service';
import { FilterDescription } from 'src/filter-description/types/filter-description.type';
import { FilterProductService } from '../filter-product/filter-product.service';

// import { HttpException } from '@nestjs/common';

@Injectable()
export class FilterService {
  constructor(private prisma: PrismaService,
    private readonly filterDescriptionService: FilterDescriptionService,
    private readonly filterProductService: FilterProductService,
  ) { }

  async create(filter: CreateFilterDto) {
    console.log("Filter: ", filter)
    // const description = this.filterDescriptionService.findOne(filter.descriptionId)

    if (await this.prisma.filter.findFirst({
      where: {
        AND: [{
          descriptionId: filter.descriptionId
        },
        {
          possibleValue: filter.possibleValue
        }]
      }
    }))
      throw new HttpException(
        "Такой фильтр уже есть",
        409
      );
    return this.prisma.filter.create({
      data: filter,
      include: { filterDescription: true }
    })
  }

  async findAll() {
    return this.prisma.filter.findMany({
      orderBy: {
        descriptionId: 'asc',
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

  async findByFilterName(descriptionId: number) {
    return this.prisma.filter.findMany({
      where: {
        descriptionId
      }
    });
  }

  async findByCategory(categoryId: number) {
    return this.prisma.filter.findMany({
      where: {
        descriptionId: {
          in: ((await this.filterDescriptionService.findByCategory(categoryId)).map(desc => desc.id))
        }
      },
    });
  }

  async findByProduct(productId: number) {
    return this.prisma.filter.findMany({
      where: {
        id: {
          in: ((await this.filterProductService.findByProduct(productId)).map(filterProd => filterProd.filterId))
        },
        // descriptionId: {
        //   in: ((await this.filterDescriptionService.findByCategory(productId)).map(desc => desc.id))
        // }
      },
    });
  }

  async findDescriptionByProduct(productId: number): Promise<FilterDescription[]> {
    return this.prisma.filterDescription.findMany({
      where: {
        id: {
          in: ((await this.findByProduct(productId)).map(filter => filter.descriptionId))
        }
      }
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
}
