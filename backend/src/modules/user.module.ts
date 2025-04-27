import { Module } from '@nestjs/common';
import { UsersRepositoryInterface } from 'src/domain/repositories/users';
import { UsersRepository } from 'src/infrastructure/repositories/users';
import { GetUserUseCase } from 'src/application/usecase/users/getUser';
import { ListUsersUseCase } from 'src/application/usecase/users/listUsers';
import { CreateUserUseCase } from 'src/application/usecase/users/createUser';
import { UpdateUserUseCase } from 'src/application/usecase/users/updateUser';
import { DeleteUserUseCase } from 'src/application/usecase/users/deleteUser';

@Module({
  providers: [
    {
      provide: UsersRepositoryInterface,
      useClass: UsersRepository,
    },
    GetUserUseCase,
    ListUsersUseCase,
    CreateUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
  ],
  exports: [
    UsersRepositoryInterface,
    GetUserUseCase,
    ListUsersUseCase,
    CreateUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
  ],
})
export class UserModule {}
