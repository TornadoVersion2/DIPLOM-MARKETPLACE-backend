import { IsNotEmpty, IsString } from "class-validator";

import { IsNumber } from "class-validator";

export class OrderDto {
  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsNotEmpty()
  @IsNumber()
  managerId: number;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;



}
