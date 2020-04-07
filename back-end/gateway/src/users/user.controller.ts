import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiOperation, ApiBody, ApiProperty } from '@nestjs/swagger';
import { SwaggerEnumType } from '@nestjs/swagger/dist/types/swagger-enum.type';

class addUserDTO {
  @ApiProperty()
  id:string;
}

@ApiTags('users')
@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get theoretical user list' })
  getUsers(): string {
    return this.userService.getUsers();
  }
  
  @Post()
  @ApiOperation({ summary: 'Add new user' })
  @ApiBody({ type: addUserDTO })
  addUser(@Body('id') userId:string) {
    this.userService.addUser(userId)
    return true;
  }
}


