import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user';
import { UsersRepositoryInterface } from 'src/domain/repositories/users';

@Injectable()
export class ListUsersUseCase {
  constructor(private readonly repository: UsersRepositoryInterface) {}
  async execute(): Promise<User[]> {
    const users = await this.repository.findAll();
    if (!users) {
      throw new Error('In ListUsersUseCase: Users not found');
    }
    return users;
  }
}
