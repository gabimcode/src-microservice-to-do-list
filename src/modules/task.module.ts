import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from 'src/controller/task.controller';
import { Task, TaskSchema } from 'src/infra/mongodb/models/task.model';
import { MongoTaskRepository } from 'src/infra/mongodb/repository/mongo-task.repository';
import { TaskRepository } from 'src/repository/task.repository';
import { TaskService } from 'src/services/task.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [
    TaskService,
    { provide: TaskRepository, useClass: MongoTaskRepository },
  ],
})
export class TaskModule {}
