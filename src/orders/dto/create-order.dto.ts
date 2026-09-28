import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ example: 1, description: 'ID of the user placing the order.' })
  userId!: number;

  @ApiProperty({ example: 1, description: 'ID of the product being ordered.' })
  productId!: number;
}