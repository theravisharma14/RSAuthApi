import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserProfileDto } from '../dto/userprofile.dto';
import { UserProfile } from '../schemas/userprofile.schema';



@Injectable()
export class ProfileService {
  profileModule: any;
  constructor(
    @InjectModel(UserProfile.name)
    private userModel: Model<UserProfile>
  ) { }

  async createProfile(userProfileDto: UserProfileDto): Promise<{ message: string; }> {
    const { User_Name, First_Name, Middle_name, Last_Name, Email, Mobile, Address_1, Address_2, LandMark, Zip, State, Region, User_Type } = userProfileDto;
    await this.userModel.create({
      User_Name,
      First_Name,
      Middle_name,
      Last_Name,
      Email,
      Mobile,
      Address_1,
      Address_2,
      LandMark,
      Zip,
      State,
      Region,
      User_Type
    });
    return { message: "You profile is created successfully" };
  }

  async getUserProfile(User_Name: string): Promise<{ userProfileDto: UserProfileDto; }> {

    const user = await this.userModel.findOne({ User_Name });

    return { userProfileDto: user };
  }

  async updateUserProfile(userProfileDto: UserProfileDto): Promise<{ message: string; }> {
    const user_name = userProfileDto.User_Name;
    const user = await this.userModel.findOne({ user_name });
    if (user !== null) {
      await testhis.userModel.updateOne(user.Address_1

      );
    }


    return { message: "update successfully" };
  }

}
