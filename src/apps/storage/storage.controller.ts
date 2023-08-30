import { Controller, Get } from '@nestjs/common';
import { StorageService } from './storage.service';

@Controller('storage')
export class StorageController {
  constructor(private storageService: StorageService) {}

  @Get('getUrl')
  getUrl() {
    return this.storageService.getUrl();
  }
}
