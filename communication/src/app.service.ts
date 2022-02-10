import { Injectable } from '@nestjs/common';
import console from 'console';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - COMMUNICATIONS', data);
    //TODO: Email User......
  }
}
