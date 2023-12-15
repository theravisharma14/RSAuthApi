import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class UserProfile  {

  @Prop()
  readonly userName: string;

  @Prop()
  readonly firstName: string;

  @Prop()
  readonly middleName: string;

  @Prop()
  readonly lastName: string;

  @Prop()
  readonly email: string;

  @Prop()
  readonly mobile : string;

  @Prop()
  readonly address1: string;

  @Prop()
  readonly address2: string;

  @Prop()
  readonly landMark: string;

  @Prop()
  readonly zip: string;

  @Prop()
  readonly state: string;

  @Prop()
  readonly region: string;
  
  @Prop()
  readonly userType: string;

}

export const userProfileSchema = SchemaFactory.createForClass(UserProfile);
