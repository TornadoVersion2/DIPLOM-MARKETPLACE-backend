import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateFilterDescriptionDto } from '../dto/create-filter-description.dto'

export class FilterDescription extends CreateFilterDescriptionDto {
    @IsNumber()
    @Type(() => Number)
    id: number
}
