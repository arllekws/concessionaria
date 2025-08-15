import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async signIn(@Body() data: AuthLoginDto) {
    return await this.authService.signIn(data.username, data.password);
  }
}
