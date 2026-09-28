import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Notebook', description: 'Product name.' })
  name!: string;

  @ApiProperty({ example: 12.5, description: 'Product price.' })
  price!: number;
}

export class ProductResponseDto {
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'Notebook' })
  name!: string;

  @ApiProperty({ example: 12.5 })
  price!: number;
}