/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();
@Injectable()
export class AuthGuard implements CanActivate {
  private jwtExpirationTimeInSeconds: number;
      constructor(
          private readonly jwtService: JwtService
      ) {
          this.jwtExpirationTimeInSeconds =Number( process.env.JWT_EXPIRATION_TIME)
      }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request & { user?: any }>();
    const token = this.extractTokenFromHeader(request);

    if(!token){
      throw new UnauthorizedException();
    }

    try{
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      request['user'] = payload;
    }catch(error){
      throw new UnauthorizedException()
    }
    return true;
  }
  private extractTokenFromHeader(request: Request): string | undefined {
  const [type, token] = request.headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
}
}
