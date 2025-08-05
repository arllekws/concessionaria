import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User
  ) {}

  async create(user: CreateUserDto) {
    const emailAlreadyExists = await this.userModel.findOne({
      where: { email: user.email },
    });

    if (emailAlreadyExists) {
      throw new HttpException("Esse email já está em uso", HttpStatus.BAD_REQUEST)
    }

    const createdUser = await this.userModel.create(user)

    return createdUser
  }

  async findAll() {
    return await this.userModel.findAll()
  }

  async update(id: string, user: UpdateUserDto) {
    const UpdateUser = await this.userModel.update(
      { ...user },
      {
        where: {
          user_id: id,
        },
        returning: true,
      }
    );
    return UpdateUser[1][0];
  }
}
