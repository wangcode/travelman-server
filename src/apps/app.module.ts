import { Module } from '@nestjs/common';
import { UserModule } from '@apps/user/user.module';
import { AuthModule } from '@apps/auth/auth.module';
import { PrismaService } from '@common/prisma/prisma.service';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
