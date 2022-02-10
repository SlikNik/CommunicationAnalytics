import { CreateUserRequest } from './create-user-request.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserReq: CreateUserRequest) {
    this.users.push(createUserReq);
    this.communicationClient.emit(
      'user_created',
      new CreateUserEvent(createUserReq.email),
    );
  }
}
