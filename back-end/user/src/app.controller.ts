import { Controller} from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('add_user')
  async addUser(data: Record<string, unknown>) {
    this.appService.addUser(data)
  }
}
