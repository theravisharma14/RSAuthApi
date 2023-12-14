import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { BookModule } from './book/module/book.module';
import { AuthModule } from './auth/module/auth.module';
import { ProfileModule } from './auth/module/profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    BookModule,
    AuthModule,
    ProfileModule

  ]
})
export class AppModule {}
