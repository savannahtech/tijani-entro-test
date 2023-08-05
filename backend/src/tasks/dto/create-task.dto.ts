import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  readonly assigneeName: string;

  @ApiProperty({ required: false })
  readonly status: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly userId: number;

  @ApiProperty({ required: false })
  readonly relatedTask: number[];
}

export class CreateConnectDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly taskId: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly relatedTaskId: number;
}
