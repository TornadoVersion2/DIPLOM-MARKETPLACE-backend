
import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateFilterProductDto {
    @IsNumber()
    @Type(() => Number)
    productId: number;

    @IsNumber()
    @Type(() => Number)
    filterId: number;
}

export class FilterProduct extends CreateFilterProductDto {
    @IsNumber()
    @Type(() => Number)
    id: number;
}
