import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

import { TuitsController } from './tuits/tuits.controller';

@Module({
  imports: [AuthModule],
  controllers: [AppController, TuitsController],
  providers: [AppService],
})
export class AppModule {}
