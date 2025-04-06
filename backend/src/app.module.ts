import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from './schedule/schedule.module';
import { UserService } from './user/user.service';

@Module({
  imports: [ScheduleModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
