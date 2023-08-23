import { Injectable } from '@nestjs/common';
import { objectstorage, common } from 'oci-sdk';

export interface PresignedUrlPayload {
  bucket: string;
  key: string;
  expires?: Date;
  type: objectstorage.models.CreatePreauthenticatedRequestDetails.AccessType;
}

@Injectable()
export class OracleObjectStorage {
  provider: common.SimpleAuthenticationDetailsProvider;
  client: objectstorage.ObjectStorageClient;

  constructor() {
    this.provider = new common.SimpleAuthenticationDetailsProvider(
      process.env.ORACLE_TENANCY,
      process.env.ORACLE_USER,
      process.env.ORACLE_FINGERPRINT,
      process.env.ORACLE_PRIVATEKEY,
      null,
    );
    this.client = new objectstorage.ObjectStorageClient({
      authenticationDetailsProvider: this.provider,
    });
  }

  listObjects = () => {};

  getPreSignedUrl = async (payload: PresignedUrlPayload) => {
    const currentDatetime = new Date();
    currentDatetime.setSeconds(currentDatetime.getSeconds() + 3600);

    const { key, type, bucket, expires = currentDatetime } = payload;

    const details: objectstorage.models.CreatePreauthenticatedRequestDetails = {
      name: '',
      objectName: key,
      accessType: type,
      timeExpires: expires,
    };

    const request: objectstorage.requests.CreatePreauthenticatedRequestRequest =
      {
        bucketName: bucket,
        namespaceName: '',
        createPreauthenticatedRequestDetails: details,
      };

    const resp = await this.client.createPreauthenticatedRequest(request);
    return resp.preauthenticatedRequest;
  };
}
