import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async addToCart(createCartDto: CreateCartDto) {
    return this.prisma.cart.create({
      data: {
        userId: createCartDto.userId,
        productId: createCartDto.productId,
      },
      include: {
        product: true,
      },
    });
  }

  async getUserCart(userId: number) {
    return this.prisma.cart.findMany({
      where: {
        userId: userId,
      },
      include: {
        product: true,
      },
    });
  }

  async removeFromCart(id: number) {
    return this.prisma.cart.delete({
      where: {
        id: id,
      },
    });
  }
} 