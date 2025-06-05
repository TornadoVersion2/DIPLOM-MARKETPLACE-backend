
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean, isNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateFilterDto {
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    name: string;

    @IsString()
    @IsOptional()
    @Type(() => String)
    description?: string;

    @IsString()
    @Type(() => String)
    possibleValue?: string

    @IsNumber()
    @Type(() => Number)
    categoryId: number;

    @IsBoolean()
    @Type(() => Boolean)
    isRanged?: boolean;

    @IsNumber()
    @IsOptional()
    @Type(() => String)
    maxValue?: number;

    @IsNumber()
    @IsOptional()
    @Type(() => String)
    minValue?: number;
}

export class Filter extends CreateFilterDto {    
    @IsNumber()
    @Type(() => Number)
    id: number;
}
