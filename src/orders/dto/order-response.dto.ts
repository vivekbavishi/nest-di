import { ApiProperty } from '@nestjs/swagger';
import { ProductResponseDto } from '../../products/dto/create-product.dto.js';
import { UserResponseDto } from '../../users/dto/user.dto.js';

export class OrderResponseDto {
  @ApiProperty({ example: '1-1' })
  id!: string;

  @ApiProperty({ type: UserResponseDto })
  user!: UserResponseDto;

  @ApiProperty({ type: ProductResponseDto })
  product!: ProductResponseDto;
}