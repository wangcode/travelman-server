import { NestFactory } from '@nestjs/core';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './apps/app.module';
import { LogLevel } from '@nestjs/common';

async function bootstrap() {
  const logLevels: LogLevel[] = ['log', 'error', 'warn', 'debug', 'verbose'];

  const app = await NestFactory.create(AppModule, {
    logger: logLevels,
  });

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Travelman Server')
    .setDescription('The travelman API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`Server listen port: 3000`);
}
bootstrap();
