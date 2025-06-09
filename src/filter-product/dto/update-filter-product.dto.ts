import { PartialType } from '@nestjs/mapped-types';
import { CreateFilterProductDto } from './create-filter-product.dto';

export class UpdateFilterProductDto extends PartialType(CreateFilterProductDto) { }
