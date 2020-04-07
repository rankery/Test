import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvModule } from './config';

@Module({
  imports: [HttpModule, EnvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
