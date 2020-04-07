import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get_user_info')
  async getHello(token: string): Promise<object> {
    
    return await this.appService.getUserInfo(token);
  }
}
