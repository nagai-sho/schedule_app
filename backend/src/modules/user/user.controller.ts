import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    // private readonly userService: UserService,
  ) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Get all users successfully.' })
  async findAll() {
    return this.userService.findAll();
  }
}
