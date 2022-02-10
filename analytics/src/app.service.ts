import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Welcome to Analytics!';
  }

  handleUserCreated(data: CreateUserEvent): void {
    console.log('handleUserCreated - ANALYTICS', data);
    this.analytics.push({
      email: data.email,
      timestamp: new Date(),
    });
  }

  getAnalytics() {
    return this.analytics;
  }
}
