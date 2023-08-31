import { Injectable } from '@nestjs/common';
import { ObjectStorageClient, models, requests } from 'oci-objectstorage';
// import type { models, requests } from 'oci-objectstorage';
import { SimpleAuthenticationDetailsProvider } from 'oci-common';

export const { AccessType } = models.CreatePreauthenticatedRequestDetails;

export interface PresignedUrlPayload {
  bucket: string;
  key: string;
  expires?: Date;
  type: models.CreatePreauthenticatedRequestDetails.AccessType;
}

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
    );
    this.client = new ObjectStorageClient({
      authenticationDetailsProvider: this.provider,
    });

  }

  listObjects = () => { };

  getPreSignedUrl = async (payload: PresignedUrlPayload) => {

    const provider = new SimpleAuthenticationDetailsProvider(
      process.env.ORACLE_TENANCY,
      process.env.ORACLE_USER,
      process.env.ORACLE_FINGERPRINT,
      process.env.ORACLE_PRIVATEKEY,
      null,
    );
    console.log(process.env.ORACLE_TENANCY,
      process.env.ORACLE_USER,
      process.env.ORACLE_FINGERPRINT,
      process.env.ORACLE_PRIVATEKEY,)
    const client = new ObjectStorageClient({
      authenticationDetailsProvider: provider,
    });

    const buckets = await client.getBucket({
      namespaceName: "nrq8pe5rifqq",
      bucketName: "travelman"
    })
    console.log(buckets)
    return buckets;

    // const currentDatetime = new Date();
    // currentDatetime.setSeconds(currentDatetime.getSeconds() + 3600);

    // const { key, type, bucket, expires = currentDatetime } = payload;

    // const details: models.CreatePreauthenticatedRequestDetails = {
    //   name: '111111',
    //   objectName: key,
    //   accessType: type,
    //   timeExpires: expires,
    // };

    // const request: requests.CreatePreauthenticatedRequestRequest = {
    //   bucketName: bucket,
    //   namespaceName: 'nrq8pe5rifqq',
    //   createPreauthenticatedRequestDetails: details,
    // };

    // const resp = await this.client.createPreauthenticatedRequest(request);
    // console.log(resp);
    // return resp.preauthenticatedRequest;
  };
}
