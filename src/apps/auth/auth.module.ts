import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from '@apps/auth/auth.controller';
import { AuthService } from '@apps/auth/auth.service';

import { UserModule } from '@apps/user/user.module';

// import { authConfig } from "@common/config";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: '123123123',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
