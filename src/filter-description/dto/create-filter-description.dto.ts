import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
// import { PartialType } from '@nestjs/mapped-types';
// import type { filterDescription } from '../'

export class CreateFilterDescriptionDto {
    @IsString()
    @Type(() => String)
    name: string;

    @IsString()
    @IsOptional()
    @Type(() => String)
    description?: string;

    @IsNumber()
    @Type(() => Number)
    categoryId: number;

    @IsString()
    @IsOptional()
    @Type(() => String)
    measureName?: string;
}

