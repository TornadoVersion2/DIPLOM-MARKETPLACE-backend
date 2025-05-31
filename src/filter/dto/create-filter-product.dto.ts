
import { IsNumber } from 'class-validator';

export class CreateFilterProductDto {
    @IsNumber()
    productId: number;

    @IsNumber()
    filterId: number;
}
