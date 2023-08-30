import { Injectable } from '@nestjs/common';
import { PrismaService } from '@common/prisma/prisma.service';
import { OracleObjectStorage } from '@common/storage/oracle';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private oracleService: OracleObjectStorage,
  ) {}

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  async findByUsername(username: string) {
    const user = await this.prisma.user.findFirst({ where: { username } });
    return user;
  }

  async findUser(params: { username?: string; email?: string }) {
    return this.prisma.user.findFirst({
      where: params,
    });
  }

  async create(data: { username: string; password: string; email: string }) {
    const user = await this.prisma.user.create({
      data,
    });
    return user.id;
  }
}
