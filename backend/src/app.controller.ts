import { CreateUserRequest } from './create-user-request.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() createUserReq: CreateUserRequest) {
    this.appService.createUser(createUserReq);
  }

  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}
