import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  readonly password: string;
}
