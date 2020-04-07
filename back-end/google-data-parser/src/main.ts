import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions, TcpClientOptions } from '@nestjs/microservices';

import { AppModule } from './app.module';

const host = process.env['GOOGLE_DOMAIN'] || 'localhost'
const port = process.env['GOOGLE_PORT'] || 3002

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
  app.listen(() => console.log('[Google] microservice is listening'));
}
bootstrap();
