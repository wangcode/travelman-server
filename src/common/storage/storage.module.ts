import { Module, DynamicModule } from "@nestjs/common";
import { OracleAuthentication } from "./oracle"

enum StorageProvider {
    AWS = 1,
    Oracle = 2
}

interface StorageConfigOracle {
    provider: StorageProvider.Oracle,
    authConfig: OracleAuthentication
}

@Module({
    providers: []
})
export class StorageModule {

    static forRoot(config: StorageConfigOracle): DynamicModule {
        return {
            providers: [],
            module: [StorageModule],
            exports: []
        }
    }

}