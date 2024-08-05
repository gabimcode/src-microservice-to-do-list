import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './modules/task.module';

@Module({
  imports: [
    TaskModule,
    MongooseModule.forRoot(
      'mongodb+srv://<user>:<password>@database.urrh1it.mongodb.net/?retryWrites=true&w=majority&appName=DataBase',
    ),
  ],
})
export class AppModule {}
