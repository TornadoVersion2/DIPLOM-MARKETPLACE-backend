import { PartialType } from '@nestjs/mapped-types';
import { CreateFilterDescriptionDto } from './create-filter-description.dto';
import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateFilterDescriptionDto extends PartialType(CreateFilterDescriptionDto) { }
