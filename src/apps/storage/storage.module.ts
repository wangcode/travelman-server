import { Module } from '@nestjs/common';
import { StorageController } from './storage.controller';
import { StorageService } from './storage.service';
import { OracleObjectStorage } from 'src/common/services/storage/oracle';

@Module({
  controllers: [StorageController],
  providers: [StorageService, OracleObjectStorage]
})
export class StorageModule {}
