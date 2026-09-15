import { Injectable } from '@nestjs/common';
import { LoggerService } from '../common/logger.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    { id: 1, name: 'Notebook', price: 12.5 },
    { id: 2, name: 'Pen', price: 2.25 },
  ];

  constructor(private readonly logger: LoggerService) {}

  findAll(): Product[] {
    return this.products;
  }

  findById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  create(product: CreateProductDto): Product {
    const newProduct: Product = {
      id: this.products.length + 1,
      ...product,
    };

    this.products.push(newProduct);
    this.logger.log(`Product created: ${newProduct.name}`);
    return newProduct;
  }
}