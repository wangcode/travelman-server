import { Module } from '@nestjs/common';
import { UserModule } from '@apps/user/user.module';
import { AuthModule } from '@apps/auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
