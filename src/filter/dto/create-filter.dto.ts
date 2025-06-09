
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean, isNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateFilterDto {
    @IsNumber()
    @Type(() => Number)
    descriptionId: number;

    @IsString()
    @Type(() => String)
    possibleValue?: string

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    value: number;
}

export class Filter extends CreateFilterDto {
    @IsNumber()
    @Type(() => Number)
    id: number;
}
