import { Injectable } from '@nestjs/common';

import { OracleObjectStorage, AccessType } from '@common/storage/oracle';

@Injectable()
export class StorageService {
  constructor(private oracleService: OracleObjectStorage) {}

  async getUrl() {
    const url = await this.oracleService.getPreSignedUrl({
      bucket: 'travelman',
      key: '123',
      type: AccessType.ObjectRead,
    });
    console.log(url.accessUri);
    return { url };
  }
}
