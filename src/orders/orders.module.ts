import { Module } from '@nestjs/common'
import { OrdersController } from './orders.controller'
import { OrdersService } from './orders.service'
import { PrismaService } from '../prisma.service'
import { JwtModule } from '@nestjs/jwt'
import { ProductsService } from '../products/products.service'

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET || 'your-secret-key',
    signOptions: { expiresIn: '1d' },
  })],
  controllers: [OrdersController],
  providers: [OrdersService, ProductsService, PrismaService],
  exports: [OrdersService]
})
export class OrdersModule {} 