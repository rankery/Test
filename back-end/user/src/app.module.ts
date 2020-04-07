import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientProxyFactory, TcpClientOptions } from '@nestjs/microservices';
import { EnvService, EnvModule } from './config';

@Module({
  imports: [ EnvModule ],
  controllers: [AppController],
  providers: [AppService, 
    {
      provide: 'AUTH0_SERVICE',
      inject:[EnvService],
      useFactory: (envService: EnvService) => ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
          host: envService.get('AUTH0_DOMAIN'),
          port: +envService.get('AUTH0_PORT')
        }
      } as TcpClientOptions) 
    },
    {
      provide: 'GOOGLE_SERVICE',
      inject:[EnvService],
      useFactory: (envService: EnvService) => ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
          host: envService.get('GOOGLE_DOMAIN'),
          port: +envService.get('GOOGLE_PORT')
        }
      } as TcpClientOptions) 
    }],
})
export class AppModule {}
