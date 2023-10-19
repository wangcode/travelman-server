import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { StorageModule } from './storage/storage.module';

import { JWTConfig } from "@common/config";

@Module({
  imports: [UserModule, AuthModule, StorageModule, ConfigModule.forRoot({
    isGlobal: true,
    load: [JWTConfig]
  })],
  controllers: [],
  providers: [],
})
export class AppModule { }
