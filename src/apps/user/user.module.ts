import { Module } from '@nestjs/common';
import { UserService } from '@apps/user/user.service';
import { PrismaService } from '@common/prisma/prisma.service';
import { OracleObjectStorage } from '@common/storage/oracle';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, OracleObjectStorage],
  exports: [UserService],
})
export class UserModule {}
