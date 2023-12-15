import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';


export class UserProfileDto {
 
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly userName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @ApiProperty()
  @IsString()
  readonly middleName: string;

  @ApiProperty()
  @IsString()
  readonly lastName : string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly mobile: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly address1: string;

  @ApiProperty()
  @IsString()
  readonly address2: string;

  @ApiProperty()
  @IsString()
  readonly landMark: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly zip: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly state: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly region: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly userType: string;

}
