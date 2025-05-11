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

@Module({
  imports: [
    ProductsModule,
    AuthModule,
    UsersModule,
    CategoriesModule,
    ImgModule,
    CartModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
