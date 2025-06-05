import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsNumber()
  @Type(() => Number)
  productId: number

  @IsNumber()
  @Type(() => Number)
  userId: number
} 