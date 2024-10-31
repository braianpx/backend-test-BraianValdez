import { Module } from '@nestjs/common';
import { connectDB } from './config/database.config';
import { TaskModule } from './task/task.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables de entorno sean accesibles en toda la aplicación
      }),
    connectDB(),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
