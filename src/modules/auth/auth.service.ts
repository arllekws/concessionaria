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

        //Função de login
    async signIn(username:string, password:string,){
        const user = await this.userModel.findOne({
            where:{username:username}
        });

        //Se nao achar usuario ou se a senha estiver errada retorna 400
        if(!user || !bcryptCompareSync(password, user.dataValues.password)){ //bcryptCompareSync compara a senha digitada com a senha criptografada no banco.
            throw new BadRequestException('Usuário ou senha estão errados');
        }

        const payload = {
          userId: user.user_id,
          email: user.email, //Payload do Token JWT, com as infos do usuário
          username: user.username,
        };

        const token = this.jwtService.sign(payload, {secret:process.env.JWT_SECRET}); //Gera o token JWT assinado com a chave secreta definida no .env

        return{
            token,
            userId:user.user_id,
            expiresIn: this.jwtExpirationTimeInSeconds
        }
    }
}
