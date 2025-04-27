import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user.module';
import { UserController } from './interfaces/users/user.controller';
import { PrismaModule } from './modules/prisma.module';

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
