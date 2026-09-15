import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { LoggerModule } from './common/logger.module.js';
import { OrdersModule } from './orders/orders.module.js';
import { ProductsModule } from './products/products.module.js';
import { UsersModule } from './users/users.module.js';

@Module({
  imports: [LoggerModule, ProductsModule, UsersModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
