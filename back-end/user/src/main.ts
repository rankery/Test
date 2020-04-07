import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions, TcpClientOptions } from '@nestjs/microservices';

import { AppModule } from './app.module';

const host = process.env['USER_DOMAIN'] || 'localhost'
const port = process.env['USER_PORT'] || 3000

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options:{
        host,
        port
      }
    } as TcpClientOptions,
  );
  app.listen(() => console.log('[User] microservice is listening'));
}
bootstrap();
