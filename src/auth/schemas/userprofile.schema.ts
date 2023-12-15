import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class UserProfile  {

  @Prop()
  readonly User_Name: string;

  @Prop()
  readonly First_Name: string;

  @Prop()
  readonly Middle_name: string;

  @Prop()
  readonly Last_Name: string;

  @Prop()
  readonly Email: string;

  @Prop()
  readonly Mobile : string;

  @Prop()
  readonly Address_1: string;

  @Prop()
  readonly Address_2: string;

  @Prop()
  readonly LandMark: string;

  @Prop()
  readonly Zip: string;

  @Prop()
  readonly State: string;

  @Prop()
  readonly Region: string;
  
  @Prop()
  readonly User_Type: string;

}

export const userProfileSchema = SchemaFactory.createForClass(UserProfile);
