import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user';
import { UsersRepositoryInterface } from 'src/domain/repositories/users';

@Injectable()
export class GetUserUseCase {
  constructor(private readonly repository: UsersRepositoryInterface) {}
  async execute(userId: number): Promise<User> {
    const user = await this.repository.find(userId);
    if (!user) {
      throw new Error('In GetUserUseCase: User not found');
    }
    return user;
  }
}
