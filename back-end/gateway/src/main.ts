import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExcludeNullInterceptor, TransformInterceptor } from './shared'
import { RedocModule, RedocOptions} from 'nestjs-redoc'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const port = process.env['GATEWAY_PORT'] || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ExcludeNullInterceptor(), new TransformInterceptor())
  app.enableCors();
  
  const options = new DocumentBuilder()
  .setTitle('Open API doc for Test Project')
  .setDescription('Gateway')
  .setBasePath('/')
  .build();
  const document = SwaggerModule.createDocument(app, options);

  const redocOptions: RedocOptions = {
    title: 'Test',
    sortPropsAlphabetically: true,
    hideDownloadButton: false,
    hideHostname: false
  };
  await RedocModule.setup('/docs', app, document, redocOptions);

  await app.listen(port);
}
bootstrap();
