import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateFilterDescriptionDto } from './dto/create-filter-description.dto'
import { UpdateFilterDescriptionDto } from './dto/update-filter-description.dto'
import { FilterDescription } from 'src/filter-description/types/filter-description.type';

@Injectable()
export class FilterDescriptionService {
  constructor(private prisma: PrismaService) { }

  async create(createFilterDescriptionDto: CreateFilterDescriptionDto): Promise<FilterDescription> {
    const description = await this.prisma.filterDescription.findFirst({
      where: {
        name: createFilterDescriptionDto.name,
        categoryId: createFilterDescriptionDto.categoryId
      },
    })
    if (description) {
      return description
    } else {
      return this.prisma.filterDescription.create({
        data:
          createFilterDescriptionDto,
      });
    }
  }

  async findAll(): Promise<FilterDescription[]> {
    return this.prisma.filterDescription.findMany();
  }

  async findOne(id: number): Promise<FilterDescription> {
    return this.prisma.filterDescription.findUnique({
      where: { id },
    });
  }

  async findByCategory(categoryId: number): Promise<FilterDescription[]> {
    return this.prisma.filterDescription.findMany({
      where: {
        categoryId
      }
    });
  }

  async findByName(name: string): Promise<FilterDescription> {
    return this.prisma.filterDescription.findFirst({
      where: { name },
    });
  }

  async update(id: number, updateFilterDescriptionDto: UpdateFilterDescriptionDto): Promise<FilterDescription> {
    return this.prisma.filterDescription.update({
      where: { id },
      data: updateFilterDescriptionDto,
    });
  }

  async remove(id: number): Promise<FilterDescription> {
    return this.prisma.filterDescription.delete({
      where: { id },
    })
  }
}
