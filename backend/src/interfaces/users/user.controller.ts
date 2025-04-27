import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListUsersUseCase } from 'src/application/usecase/users/listUsers';
import { GetUserUseCase } from 'src/application/usecase/users/getUser';
import { CreateUserUseCase } from 'src/application/usecase/users/createUser';
import { UpdateUserUseCase } from 'src/application/usecase/users/updateUser';
import { DeleteUserUseCase } from 'src/application/usecase/users/deleteUser';
import {
  GetUserResponse,
  GetUsersResponse,
  PostUserResponse,
  PutUserResponse,
} from './user.res.dto';
import { PathParams, PostUserRequest, PutUserRequest } from './user.req.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private readonly listUseCase: ListUsersUseCase,
    private readonly getUseCase: GetUserUseCase,
    private readonly createUseCase: CreateUserUseCase,
    private readonly updateUseCase: UpdateUserUseCase,
    private readonly deleteUseCase: DeleteUserUseCase,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'ユーザー一覧を取得する',
    type: GetUsersResponse,
  })
  async getUsers(): Promise<GetUsersResponse> {
    const users = await this.listUseCase.execute();
    return {
      users: users.map((user) => ({
        userId: user.userId,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        hashedPassword: user.hashedPassword,
        company: user.company,
        postalCode: user.postalCode,
        address: user.address,
      })),
    };
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'ユーザー情報を取得する',
    type: GetUserResponse,
  })
  async getUser(@Param() pathParams: PathParams): Promise<GetUserResponse> {
    const user = await this.getUseCase.execute(pathParams.userId);
    return {
      user: {
        userId: user.userId,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        hashedPassword: user.hashedPassword,
        company: user.company,
        postalCode: user.postalCode,
        address: user.address,
      },
    };
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'ユーザーを作成する',
    type: PostUserResponse,
  })
  @HttpCode(HttpStatus.CREATED)
  async createUser(
    @Body() request: PostUserRequest,
  ): Promise<PostUserResponse> {
    const createUserDto = {
      name: request.name,
      email: request.email,
      phoneNumber: request.phoneNumber,
      hashedPassword: request.hashedPassword,
      company: request.company,
      postalCode: request.postalCode,
      address: request.address,
    };
    const createdUser = await this.createUseCase.execute(createUserDto);
    return {
      userId: createdUser.userId,
      name: createdUser.name,
      email: createdUser.email,
      phoneNumber: createdUser.phoneNumber,
      hashedPassword: createdUser.hashedPassword,
      company: createdUser.company,
      postalCode: createdUser.postalCode,
      address: createdUser.address,
    };
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'ユーザー情報を更新する',
    type: PutUserResponse,
  })
  async updateUser(
    @Param() pathParams: PathParams,
    @Body() request: PutUserRequest,
  ): Promise<PutUserResponse> {
    const updateUserDto = {
      userId: pathParams.userId,
      name: request.name,
      email: request.email,
      phoneNumber: request.phoneNumber,
      hashedPassword: request.hashedPassword,
      company: request.company,
      postalCode: request.postalCode,
      address: request.address,
    };
    const updateUser = await this.updateUseCase.execute(updateUserDto);
    return {
      userId: updateUser.userId,
      name: updateUser.name,
      email: updateUser.email,
      phoneNumber: updateUser.phoneNumber,
      hashedPassword: updateUser.hashedPassword,
      company: updateUser.company,
      postalCode: updateUser.postalCode,
      address: updateUser.address,
    };
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUser(@Param() pathParams: PathParams): Promise<void> {
    await this.deleteUseCase.execute(pathParams.userId);
  }
}
