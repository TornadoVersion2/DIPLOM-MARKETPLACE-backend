import { Module } from '@nestjs/common';
import { FilterProductService } from './filter-product.service';
import { FilterProductController } from './filter-product.controller';
import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET || 'your-secret-key',
    signOptions: { expiresIn: '1d' },
  })],
  controllers: [FilterProductController],
  providers: [FilterProductService, PrismaService],
})
export class FilterProductModule { }
