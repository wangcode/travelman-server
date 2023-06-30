import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config"
// import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    // TypeOrmModule.forRoot({
    //   url
    // })
    StorageModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
