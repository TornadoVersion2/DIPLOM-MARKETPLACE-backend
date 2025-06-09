import { Module } from '@nestjs/common';
import { FilterDescriptionService } from './filter-description.service';
import { FilterDescriptionController } from './filter-description.controller';
import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET || 'your-secret-key',
    signOptions: { expiresIn: '1d' },
  })],
  controllers: [FilterDescriptionController],
  providers: [FilterDescriptionService, PrismaService],
  exports: [FilterDescriptionService]
})
export class FilterDescriptionModule { }
