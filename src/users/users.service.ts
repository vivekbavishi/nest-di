import { Injectable } from '@nestjs/common';
import { LoggerService } from '../common/logger.service.js';

export interface User {
  id: number;
  name: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, name: 'rajesh khanna' },
    { id: 2, name: 'luka Hopper' },
  ];

  constructor(private readonly logger: LoggerService) {}

  findById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  create(name: string): User {
    const user = { id: this.users.length + 1, name };
    this.users.push(user);
    this.logger.log(`User created: ${user.name}`);
    return user;
  }
}