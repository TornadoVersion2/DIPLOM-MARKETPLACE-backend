import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { ImgModule } from './img/img.module';
import { CartModule } from './cart/cart.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { OrdersModule } from './orders/orders.module';
import { FilterModule } from './filter/filter.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-secret-key',
      signOptions: { expiresIn: '1d' },
    }),
    ProductsModule,
    AuthModule,
    UsersModule,
    CategoriesModule,
    ImgModule,
    CartModule,
    OrdersModule,
    FilterModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, JwtAuthGuard],
})
export class AppModule { }
