import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { TaskInterface } from './task.interface';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTask(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }

  @Post()
  async createTask(@Body() createTaskDto: TaskInterface): Promise<Task> {
    return this.taskService.createTask(createTaskDto);
  }

  @Put('/:id')
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: TaskInterface,
  ): Promise<Task> {
    console.log('entro')
    return this.taskService.updateTask(id, updateTaskDto);
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string): Promise<string> {
    await this.taskService.deleteTask(id);
    return 'Tarea eliminada';
  }

  @Patch('/:id')
  async updateCompleteTask(@Param('id') id: string): Promise<Task> {
    return this.taskService.updateTaskComplete(id);
  }
}
