import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  description: string;

  completed: boolean;
}
