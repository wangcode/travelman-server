import { Module } from '@nestjs/common';

import { OracleObjectStorage } from '@common/storage/oracle';

import { StorageController } from './storage.controller';
import { StorageService } from './storage.service';

@Module({
  controllers: [StorageController],
  providers: [StorageService, OracleObjectStorage],
})
export class StorageModule { }
