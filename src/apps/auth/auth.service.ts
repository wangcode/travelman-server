import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';

import { UserService } from '@apps/user/user.service';

@Injectable()
export class AuthService {
  private saltRounds = 10;

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn({ email, password }: { email: string; password: string }) {
    const user = await this.userService.findUser({ email });

    if (!this.validatePassword(password, user.password)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(userData: {
    username: string;
    password: string;
    email: string;
  }) {
    const newPassword = await this.hashText(userData.password);
    const userId = await this.userService.create({
      username: userData.username,
      email: userData.email,
      password: newPassword,
    });
    return userId;
  }

  private async validatePassword(plainText: string, password: string) {
    return await bcrypt.compare(plainText, password);
  }

  private async hashText(plainText: string) {
    return await bcrypt.hash(plainText, this.saltRounds);
  }
}
