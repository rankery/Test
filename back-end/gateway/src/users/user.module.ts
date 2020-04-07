import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import {  Transport, ClientProxyFactory, TcpClientOptions } from "@nestjs/microservices";
import { UserService } from './user.service';
import { EnvService, EnvModule} from 'src/config'

@Module({
  imports: [EnvModule],
  controllers: [UserController],
  providers: [UserService,
    {
      provide: 'USER_SERVICE',
      inject:[EnvService],
      useFactory: (envService: EnvService) => ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
          host: envService.get('USER_DOMAIN'),
          port: +envService.get('USER_PORT')
        }
      } as TcpClientOptions) 
    }],
})
export class UserModule {}
