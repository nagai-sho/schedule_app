import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user';
import { UsersRepositoryInterface } from 'src/domain/repositories/users';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly repository: UsersRepositoryInterface) {}
  async execute(dto: CreateUserDto): Promise<User> {
    const user = new User(
      dto.name,
      dto.email,
      dto.phoneNumber,
      dto.hashedPassword,
      dto.company,
      dto.postalCode,
      dto.address,
    );
    return this.repository.create(user);
  }
}

export class CreateUserDto {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly phoneNumber: string | null,
    public readonly hashedPassword: string,
    public readonly company: string | null,
    public readonly postalCode: string | null,
    public readonly address: string | null,
  ) {}
}
