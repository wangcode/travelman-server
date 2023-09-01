import { Controller, UseGuards, Get } from '@nestjs/common';

import { UserService } from './user.service';
import { AuthGuard, JWTUser } from '@apps/auth/auth.guard';
import { User } from '@common/decorators/user.decorators';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@User() user: JWTUser) {
    return user;
  }
}
