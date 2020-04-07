import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExcludeNullInterceptor, TransformInterceptor } from './shared'

const port = process.env['GATEWAY_PORT'] || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ExcludeNullInterceptor(), new TransformInterceptor())
  app.enableCors();
  await app.listen(port);
}
bootstrap();
