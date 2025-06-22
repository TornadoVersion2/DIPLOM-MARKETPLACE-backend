import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET || 'your-secret-key',
    signOptions: { expiresIn: '1d' },
  }), CategoriesModule],
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService],
  exports: [ProductsService]
})
export class ProductsModule { } 