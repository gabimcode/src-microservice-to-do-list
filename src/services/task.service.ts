import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { Task } from 'src/infra/mongodb/models/task.model';
import { TaskRepository } from 'src/repository/task.repository';

@Injectable()
export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  async createTask(task: CreateTaskDto): Promise<Task> {
    return await this.taskRepository.create(task);
  }
}
