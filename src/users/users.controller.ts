import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body('name') name: string) {
    return this.usersService.create(name);
  }
}