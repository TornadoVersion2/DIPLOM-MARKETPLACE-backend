
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean, isNumber } from 'class-validator';

export class CreateFilterDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    possibleValue?: string

    @IsNumber()
    categoryId: number;

    @IsBoolean()
    isRanged?: boolean;

    @IsNumber()
    @IsOptional()
    maxValue?: number;

    @IsNumber()
    @IsOptional()
    minValue?: number;
}
