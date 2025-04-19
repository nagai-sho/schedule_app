import { User } from '../entities/user';

export abstract class UsersRepositoryInterface {
  abstract create(user: User): Promise<User>;
  abstract find(id: number): Promise<User>;
  abstract findAll(): Promise<User[]>;
  abstract update(user: User): Promise<User>;
  abstract delete(id: number): Promise<void>;
}
