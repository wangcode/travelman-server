import { Module } from '@nestjs/common';
import { UserModule } from '@apps/user/user.module';
import { AuthModule } from '@apps/auth/auth.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [UserModule, AuthModule, StorageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
