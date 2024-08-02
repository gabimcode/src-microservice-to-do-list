import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../models/task.model';
import { Model } from 'mongoose';
import { TaskRepository } from 'src/repository/task.repository';

export class MongoTaskRepository implements TaskRepository {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(task: Task): Promise<Task> {
    return await this.taskModel.create(task);
  }
}
