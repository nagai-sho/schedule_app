import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // ユーザーを全件取得する
  async findAll() {
    return this.prisma.user.findMany(); // Prisma クライアントを使用してユーザーを取得
  }
}
