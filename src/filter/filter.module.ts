import { Module } from '@nestjs/common';
import { FilterService } from './filter.service';
import { FilterController } from './filter.controller';
// import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { FilterDescriptionModule } from '../filter-description/filter-description.module'
import { FilterProductService } from 'src/filter-product/filter-product.service';
import { FilterProductModule } from 'src/filter-product/filter-product.module';
import { FilterDescriptionService } from 'src/filter-description/filter-description.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET || 'your-secret-key',
    signOptions: { expiresIn: '1d' },
  }), FilterDescriptionModule, FilterProductModule],
  controllers: [FilterController],
  providers: [FilterService, FilterProductService, FilterDescriptionService, PrismaService],
  exports: [FilterService]
})

export class FilterModule { }
