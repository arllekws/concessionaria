import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { compareSync as bcryptCompareSync } from 'bcrypt';
import { User } from '../user/user.entity';
import { InjectModel } from '@nestjs/sequelize';

dotenv.config();
@Injectable()
export class AuthService {
    private jwtExpirationTimeInSeconds: number;
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User,
        private readonly jwtService: JwtService,
    ) {
        this.jwtExpirationTimeInSeconds = Number(process.env.JWT_EXPIRATION_TIME)
    }

    async signIn(username:string, password:string,){
        const user = await this.userModel.findOne({
            where:{username:username}
        });

        if(!user || !bcryptCompareSync(password, user.dataValues.password)){
            throw new BadRequestException('Usuário ou senha estão errados');
        }

        const payload = {
          userId: user.user_id,
          email: user.email,
          username: user.username,
        };

        const token = this.jwtService.sign(payload);

        return{
            token,
            userId:user.user_id,
            expiresIn: this.jwtExpirationTimeInSeconds
        }
    }
}
