import { Body, Controller, Post } from '@nestjs/common';
import { create } from 'domain';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { Task } from 'src/infra/mongodb/models/task.model';
import { TaskService } from 'src/services/task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  async create(@Body() payload: CreateTaskDto): Promise<Task> {
    const createdTask = await this.taskService.createTask(payload);
    return createdTask;
  }
}
