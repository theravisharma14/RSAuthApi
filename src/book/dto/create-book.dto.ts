import {
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';
import { Category } from '../schemas/book.schema';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  
  @ApiProperty() 
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly author: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Category, { message: 'Please enter correct category.' })
  readonly category: Category;
  
  @ApiProperty()
  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;

  
}
