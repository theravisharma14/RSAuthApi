import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../../auth/module/auth.module';
import { ProfileController } from '../controllers/profilecontroller';
import { ProfileService } from '../services/ProfileService';
import { userProfileSchema } from '../schemas/userprofile.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'UserProfile', schema : userProfileSchema }]),
  ],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
