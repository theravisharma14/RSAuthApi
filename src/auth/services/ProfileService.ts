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
    const { userName, firstName, middleName, lastName, email, mobile, address1, address2, landMark, zip, state, region, userType } = userProfileDto;
    await this.userModel.create({
      userName,
      firstName,
      middleName,
      lastName,
      email,
      mobile,
      address1,
      address2,
      landMark,
      zip,
      state,
      region,
      userType
    });
    return { message: "You profile is created successfully" };
  }

  async getUserProfile(userName: string): Promise<{ userProfileDto: UserProfileDto; }> {

    const user = await this.userModel.findOne({ userName });

    return { userProfileDto: user };
  }

  async updateUserProfile(userProfileDto: UserProfileDto): Promise<{ message: string; }> {
    // const filter ={user userProfileDto.User_Name};

    const user = await this.userModel.findOneAndUpdate({ userName: userProfileDto.userName }, userProfileDto, {
      new: true
    })
    if (!user) {

    }
    return { message: "updated" }
  }


}
