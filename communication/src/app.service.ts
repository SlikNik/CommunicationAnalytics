import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent): void {
    console.log('handleUserCreated - COMMUNICATIONS', data);
    //TODO Email User......
  }
}
