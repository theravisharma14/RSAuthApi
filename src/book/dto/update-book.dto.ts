import {
  IsEmpty,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';
import { Category } from '../schemas/book.schema';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty()  
  @IsOptional()
  @IsString()
  readonly description: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly author: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly price: number;

  @ApiProperty()
  @IsOptional()
  @IsEnum(Category, { message: 'Please enter correct category.' })
  readonly category: Category;
  
  @ApiProperty()
  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
