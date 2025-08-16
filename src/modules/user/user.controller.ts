import { Body, Controller, Get,  Param,  Patch,  Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body()
    user: CreateUserDto
  ) {
    return await this.userService.create(user)
  }

  
  @Get()
  async findAll() {
    return await this.userService.findAll()
  }

  @UseGuards(AuthGuard)
  @Patch(':user_id')
    async update(
        @Param('user_id') user_id: string,
        @Body() data: UpdateUserDto
    ) {
        return await this.userService.update(user_id, data);
    }

  
}
