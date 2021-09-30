import { Module } from '@nestjs/common';

import { CoffeesModule } from './coffees/coffees.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  imports: [CoffeesModule],
  providers: [AppService],
})
export class AppModule {}
