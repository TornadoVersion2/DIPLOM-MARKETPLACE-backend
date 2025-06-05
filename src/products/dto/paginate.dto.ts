import { IsNumber, IsOptional, IsBoolean, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { Filter } from '../../filter/dto/create-filter.dto'

export class PaginateDto {
    @IsNumber()
    @Type(() => Number)
    currentPage: number = 1;

    @IsNumber()
    @Type(() => Number)
    itemsPerPage: number = 10;
}

export class TotalPagesDto {
    constructor() { this.itemsPerPage = 10 }
    @IsNumber()
    @Type(() => Number)
    itemsPerPage: number = 10;
}

export class SearchDto {
    @IsString()
    @Type(() => String)
    searchQuery: string

    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    selectedCategoryId: number = 0;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    currentPage: number = 1;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    itemsPerPage: number = 10;

    @IsOptional()
    filters: Filter[];
} 