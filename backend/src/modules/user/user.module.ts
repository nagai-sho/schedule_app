import { Module } from '@nestjs/common';
import { UserService } from './user.service'; // UserService をインポート
import { UserController } from './user.controller'; // UserController をインポート

@Module({
  controllers: [UserController], // コントローラを登録
  providers: [UserService], // サービスを登録
})
export class UserModule {}
