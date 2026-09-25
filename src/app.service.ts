import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
        const githubUrl = 'https://github.com/vivekbavishi/nest-di';
    return `<a href="${githubUrl}" target="_blank" rel="noopener noreferrer">${githubUrl}</a>`;
  }
}
