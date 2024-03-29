import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @MaxLength(15)
  @IsNotEmpty()
  @ApiProperty()
  readonly phone: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly age: number;
}
