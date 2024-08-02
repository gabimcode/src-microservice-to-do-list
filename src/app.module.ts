import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './modules/task.module';

@Module({
  imports: [
    TaskModule,
    MongooseModule.forRoot(
      'mongodb+srv://gabicarfi:taEJvDHY3SBfR4Yh@database.urrh1it.mongodb.net/?retryWrites=true&w=majority&appName=DataBase',
    ),
  ],
})
export class AppModule {}
