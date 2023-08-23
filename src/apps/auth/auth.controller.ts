import { Controller, UseGuards, Get, Body, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from '@common/dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile() {}

  @Post('signin')
  @ApiBody({ type: SigninDto })
  async signIn(data: SigninDto) {
    return this.authService.signIn(data);
  }

  @Post('signup')
  async signUp(@Body() data: SignupDto) {
    return this.authService.signUp(data);
  }
}
