import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsService } from '../products/products.service.js';
import { UsersService } from '../users/users.service.js';
import { CreateOrderDto } from './dto/create-order.dto.js';

@Injectable()
export class OrdersService {
  constructor(
    private readonly usersService: UsersService,
    private readonly productsService: ProductsService,
  ) {}

  create({ userId, productId }: CreateOrderDto) {
    const user = this.usersService.findById(userId);
    const product = this.productsService.findById(productId);

    if (!user) {
      throw new NotFoundException(`User ${userId} not found`);
    }
    if (!product) {
      throw new NotFoundException(`Product ${productId} not found`);
    }

    return {
      id: `${user.id}-${product.id}`,
      user,
      product,
    };
  }
}