import { CreateOrderDto } from "./create-order.dto";
import { PartialType } from "@nestjs/mapped-types";
import { IsEnum, IsNumber, IsOptional } from 'class-validator'
import { OrderStatus } from '@prisma/client'

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus

  @IsOptional()
  @IsNumber()
  managerId?: number
} 