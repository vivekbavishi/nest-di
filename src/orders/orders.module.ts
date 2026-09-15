import { Module } from '@nestjs/common';
import { ProductsModule } from '../products/products.module.js';
import { UsersModule } from '../users/users.module.js';
import { OrdersController } from './orders.controller.js';
import { OrdersService } from './orders.service.js';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}