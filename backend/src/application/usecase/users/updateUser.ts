import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user';
import { UsersRepositoryInterface } from 'src/domain/repositories/users';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly repository: UsersRepositoryInterface) {}
  async execute(dto: UpdateUserDto): Promise<User> {
    const user = await this.repository.find(dto.userId);
    if (!user) {
      throw new Error('In UpdateUserUseCase: User not found');
    }
    user.update(
      dto.name,
      dto.email,
      dto.phoneNumber ?? user.phoneNumber,
      dto.hashedPassword,
      dto.company ?? user.company,
      dto.postalCode ?? user.postalCode,
      dto.address ?? user.address,
    );
    return this.repository.update(user);
  }
}

export class UpdateUserDto {
  constructor(
    public readonly userId: number,
    public readonly name: string,
    public readonly email: string,
    public readonly phoneNumber: string | null,
    public readonly hashedPassword: string,
    public readonly company: string | null,
    public readonly postalCode: string | null,
    public readonly address: string | null,
  ) {}
}
