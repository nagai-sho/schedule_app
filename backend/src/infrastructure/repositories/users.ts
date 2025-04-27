import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { User } from 'src/domain/entities/user';
import { UsersRepositoryInterface } from 'src/domain/repositories/users';

@Injectable()
export class UsersRepository implements UsersRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: User): Promise<User> {
    const created = await this.prisma.user.create({
      data: {
        userId: user.userId,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        hashedPassword: user.hashedPassword,
        company: user.company,
        postalCode: user.postalCode,
        address: user.address,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
    return this.translateToDomain(created);
  }

  async find(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        userId: id,
      },
    });
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    return this.translateToDomain(user);
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    });
    return users.map((user) => this.translateToDomain(user));
  }

  async update(user: User): Promise<User> {
    const updated = await this.prisma.user.update({
      where: {
        userId: user.userId,
      },
      data: {
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        hashedPassword: user.hashedPassword,
        company: user.company,
        postalCode: user.postalCode,
        address: user.address,
        updatedAt: user.updatedAt,
      },
    });
    return this.translateToDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.user.delete({
      where: {
        userId: id,
      },
    });
  }

  private translateToDomain(user): User {
    return User.reconstruct({
      userId: user.userId,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      hashedPassword: user.hashedPassword,
      company: user.company,
      postalCode: user.postalCode,
      address: user.address,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  }
}
