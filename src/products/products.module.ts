import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';
// import { CategoriesService } from '../categories/categories.service'
import { CategoriesModule } from 'src/categories/categories.module';
import { FilterModule } from 'src/filter/filter.module';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET || 'your-secret-key',
    signOptions: { expiresIn: '1d' },
  }), CategoriesModule, FilterModule],
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService],
  exports: [ProductsService]
})
export class ProductsModule { } 