import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { ProductsService } from './products.service.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    const product = this.productsService.findById(id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }

    return product;
  }

  @Post()
  create(@Body() product: CreateProductDto) {
    return this.productsService.create(product);
  }
}