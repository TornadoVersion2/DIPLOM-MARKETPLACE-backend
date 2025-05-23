import { Controller, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  addToCart(@Body() createCartDto: CreateCartDto) {
    console.log("Adding to cart", createCartDto)
    return this.cartService.addToCart(createCartDto);
  }

  @Post('bulk')
  addManyToCart(@Body() createCartItemsDto: { cartItems: CreateCartDto[] }) {
    return this.cartService.createMany(createCartItemsDto.cartItems);
  }

  @Get(':userId')
  getUserCart(@Param('userId') userId: string) {
    return this.cartService.getUserCart(+userId);
  }

  @Delete(':id')
  removeFromCart(@Param('id') id: string) {
    return this.cartService.removeFromCart(+id);
  }
} 