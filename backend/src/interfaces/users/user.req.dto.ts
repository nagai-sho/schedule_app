import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class PathParams {
  @ApiProperty({
    description: 'ユーザーID',
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;
}

export class PostUserRequest {
  @ApiProperty({
    description: 'ユーザー名',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30, { message: 'Name must be 30 characters or less' })
  @MinLength(1, { message: 'Name must be 1 characters or more' })
  @Transform(({ value }) => value.trim())
  name: string;

  @ApiProperty({
    description: 'メールアドレス',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'Email must be 100 characters or less' })
  @Transform(({ value }) => value.trim())
  email: string;

  @ApiProperty({
    description: 'パスワード',
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  hashedPassword: string;

  @ApiProperty({
    description: '電話番号',
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @MaxLength(11, { message: 'PhoneNumber must be 11 characters or less' })
  @Transform(({ value }) => value?.trim())
  phoneNumber: string | null;

  @ApiProperty({
    description: '会社名',
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @MaxLength(100, { message: 'Company must be 100 characters or less' })
  @MinLength(1, { message: 'Company must be 1 characters or more' })
  @Transform(({ value }) => value?.trim())
  company: string | null;

  @ApiProperty({
    description: '郵便番号',
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @ValidateIf((_, value) => value !== null && value !== '')
  @Matches(/^\d{3}-\d{4}$/, {
    message: 'PostalCode must be in the format 123-4567',
  })
  @Transform(({ value }) => value?.trim())
  postalCode: string | null;

  @ApiProperty({
    description: '会社住所',
  })
  @IsOptional()
  @MaxLength(255, { message: 'Address must be 255 characters or less' })
  @Transform(({ value }) => value?.trim())
  address: string | null;
}

export class PutUserRequest extends PostUserRequest {}
