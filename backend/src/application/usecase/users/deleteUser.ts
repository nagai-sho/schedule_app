import { Injectable } from '@nestjs/common';
import { UsersRepositoryInterface } from 'src/domain/repositories/users';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly repository: UsersRepositoryInterface) {}
  async execute(userId: number): Promise<void> {
    const user = this.repository.find(userId);
    if (!user) {
      throw new Error('In DeleteUserUseCase: User not found');
    }
    await this.repository.delete(userId);
  }
}
