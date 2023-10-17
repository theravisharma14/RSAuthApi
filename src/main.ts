import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const options = new DocumentBuilder().addBearerAuth();
  const options = new DocumentBuilder().addOAuth2();

  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
  .setTitle('nestJs Example')
  .setDescription('The nestJs API description')
  .setVersion('1.0')
  .addOAuth2()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();

