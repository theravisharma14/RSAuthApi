import { Body, Controller, Get, Param, Post , UseGuards} from '@nestjs/common';
import { UserProfileDto } from '../dto/userprofile.dto';
import { ProfileService } from '../services/ProfileService';
import { AuthGuard } from '@nestjs/passport';


@UseGuards(AuthGuard())
@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Post('/create')
  createProfile(@Body() userProfileDto: UserProfileDto): Promise<{message : string}>{
    return this.profileService.createProfile(userProfileDto);
  }

  @Get('/:User_Name')
  getUserProfile(@Param('User_Name') User_Name: string): Promise<{userProfileDto: UserProfileDto}>{
    return this.profileService.getUserProfile(User_Name);
  }

  @Post('/update')
  updateUserProfile(@Body() userProfileDto: UserProfileDto): Promise<{message : string}>{
    return this.profileService.updateUserProfile(userProfileDto);
  }

}
