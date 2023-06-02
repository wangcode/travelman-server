import { objectstorage, common } from "oci-sdk"



export class Storage {

    provider: common.ConfigFileAuthenticationDetailsProvider;
    client: objectstorage.ObjectStorageClient;

    constructor() {
        this.provider = new common.ConfigFileAuthenticationDetailsProvider();
        this.client = new objectstorage.ObjectStorageClient({ authenticationDetailsProvider: this.provider })
    }

    listObjects = () => {}

    getPreSignedUrl = async (
        bucketName: string,
        key: string,
        type: objectstorage.models.CreatePreauthenticatedRequestDetails.AccessType
    ) => {
        
        const details: objectstorage.models.CreatePreauthenticatedRequestDetails = {
            name: "",
            objectName: key,
            accessType: type,
            timeExpires: new Date()
        }

        const request: objectstorage.requests.CreatePreauthenticatedRequestRequest = {
            bucketName,
            namespaceName: "",
            createPreauthenticatedRequestDetails: details
        }

        const resp = await this.client.createPreauthenticatedRequest(request);

        console.log(resp);
        return ""
    }

}