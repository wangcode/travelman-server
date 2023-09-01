import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { StorageService } from './storage.service';
import { User } from '@common/decorators/user.decorators';
import { AuthGuard, JWTUser } from '@apps/auth/auth.guard';

@Controller('storage')
export class StorageController {
  constructor(private storageService: StorageService) {}

  @UseGuards(AuthGuard)
  @Get('getUrl')
  getUrl(
    @User() user: JWTUser,
    @Req() req,
    @Query('fileName') fileName: string,
  ) {
    return this.storageService.getPresignedUrl(fileName, user.sub);
  }
}
