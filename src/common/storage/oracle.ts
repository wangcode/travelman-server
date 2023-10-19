import { Injectable } from '@nestjs/common';
import { ObjectStorageClient, models, requests } from 'oci-objectstorage';
import { SimpleAuthenticationDetailsProvider, ConfigFileAuthenticationDetailsProvider, Region } from 'oci-common';

export const { AccessType } = models.CreatePreauthenticatedRequestDetails;

export interface PresignedUrlPayload {
  bucket: string;
  key: string;
  namespace: string;
  expires?: Date;
  type: models.CreatePreauthenticatedRequestDetails.AccessType;
}

export type OracleAuthentication = SimpleAuthenticationDetailsProvider & ConfigFileAuthenticationDetailsProvider;

@Injectable()
export class OracleObjectStorage {
  private provider: SimpleAuthenticationDetailsProvider;
  private client: ObjectStorageClient;

  constructor() {
    this.provider = new SimpleAuthenticationDetailsProvider(
      process.env.ORACLE_TENANCY,
      process.env.ORACLE_USER,
      process.env.ORACLE_FINGERPRINT,
      process.env.ORACLE_PRIVATEKEY,
      null,
      Region.AP_TOKYO_1,
    );
    this.client = new ObjectStorageClient({
      authenticationDetailsProvider: this.provider,
    });
  }

  listObjects = () => { };

  getPreSignedUrl = async (payload: PresignedUrlPayload) => {
    const currentDatetime = new Date();
    currentDatetime.setSeconds(currentDatetime.getSeconds() + 3600);

    const { key, type, bucket, namespace, expires = currentDatetime } = payload;

    const details: models.CreatePreauthenticatedRequestDetails = {
      name: key,
      objectName: key,
      accessType: type,
      timeExpires: expires,
    };

    const request: requests.CreatePreauthenticatedRequestRequest = {
      bucketName: bucket,
      namespaceName: namespace,
      createPreauthenticatedRequestDetails: details,
    };

    const resp = await this.client.createPreauthenticatedRequest(request);
    return resp.preauthenticatedRequest;
  };
}
