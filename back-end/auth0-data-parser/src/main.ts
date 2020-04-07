import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions, TcpClientOptions } from '@nestjs/microservices';

import { AppModule } from './app.module';

const host = process.env['AUTH0_DOMAIN'] || 'localhost'
const port = process.env['AUTH0_PORT'] || 3001


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host,
        port
      }
    } as TcpClientOptions,
  );
  app.listen(() => console.log('[Auth0] microservice is listening'));
}
bootstrap();
