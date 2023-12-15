import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';


export class UserProfileDto {
 
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly User_Name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly First_Name: string;

  @ApiProperty()
  @IsString()
  readonly Middle_name: string;

  @ApiProperty()
  @IsString()
  readonly Last_Name : string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly Email: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly Mobile: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly Address_1: string;

  @ApiProperty()
  @IsString()
  readonly Address_2: string;

  @ApiProperty()
  @IsString()
  readonly LandMark: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly Zip: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly State: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Region: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly User_Type: string;

}
