import { Injectable,Inject } from '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class UserService {
  constructor(
    @Inject("USER_SERVICE") private readonly userService: ClientProxy
  ) {}

  getUsers(): string {
    return 'Users controller working!';
  }
  addUser(id: string) {
    this.userService.emit('add_user', id)
  }
}
