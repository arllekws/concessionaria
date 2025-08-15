/* eslint-disable @typescript-eslint/require-await */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/user.entity';

dotenv.config();

@Module({
  imports:[
    SequelizeModule.forFeature([User]),
    JwtModule.registerAsync({
    global: true,
    useFactory: async () => ({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRATION_TIME ,
      },
    }),
  })
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
