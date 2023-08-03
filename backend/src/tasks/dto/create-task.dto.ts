import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsEmail()
  readonly title: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  readonly assigneeName: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  readonly status: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly userId: number;
}

export class CreateConnectDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly taskId: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly otherId: number;
}
