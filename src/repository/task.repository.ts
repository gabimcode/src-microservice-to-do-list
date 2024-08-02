import { Task } from 'src/infra/mongodb/models/task.model';

export abstract class TaskRepository {
  abstract create(task: Task): Promise<Task>;
}
