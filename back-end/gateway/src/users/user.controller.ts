import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): string {
    return this.userService.getUsers();
  }
  @Post()
  addUser(@Body('id') userId:string): string {
    this.userService.addUser(userId)
    return 'User Logged'
  }
}
