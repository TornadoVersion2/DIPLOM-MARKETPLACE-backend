import { Module } from '@nestjs/common';
import { FilterService } from './filter.service';
import { FilterController } from './filter.controller';
import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';
import {FilterDescriptionModule} from '../filter-description/filter-description.module'

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET || 'your-secret-key',
    signOptions: { expiresIn: '1d' },
  }), FilterDescriptionModule],
  controllers: [FilterController],
  providers: [FilterService, PrismaService],
  exports: [FilterService]
})
export class FilterModule { }
