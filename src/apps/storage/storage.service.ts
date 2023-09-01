import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

import { OracleObjectStorage, AccessType } from '@common/storage/oracle';

@Injectable()
export class StorageService {
  constructor(private oracleService: OracleObjectStorage) {}

  private generateKey(fileName: string, userId: string) {
    return `${userId}/${v4()}/${fileName}`;
  }

  async getPresignedUrl(fileName: string, userId: string) {
    return this.oracleService.getPreSignedUrl({
      bucket: process.env.ORACLE_OBJECT_STORAGE_BUCKET,
      key: this.generateKey(fileName, userId),
      type: AccessType.ObjectReadWrite,
      namespace: process.env.ORACLE_OBJECT_STORAGE_NAMESPACE,
    });
  }
}
