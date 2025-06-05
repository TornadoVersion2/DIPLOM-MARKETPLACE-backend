import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  @Type(() => String)
  name: string;

  @IsString()
  @IsOptional()
  @Type(() => String)
  description?: string;

  @IsNumber()
  @Type(() => Number)
  price: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  quantity?: number;

  @IsNumber()
  @Type(() => Number)
  categoryId: number;

  @IsString()
  @IsOptional()
  @Type(() => String)
  imageUrl?: string;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  isActive?: boolean;

  @IsNumber()
  @Type(() => Number)
  managerId: number;
}

export class Product extends CreateProductDto {
  @IsNumber()
  @Type(() => Number)
  id: number;
}