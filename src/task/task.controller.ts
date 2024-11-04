import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  @HttpCode(200)
  async getAllTask(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }

  @Post()
  @HttpCode(201)
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(createTaskDto);
  }

  @Put('/:id')
  @HttpCode(200)
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.taskService.updateTask(id, updateTaskDto);
  }

  @Delete('/:id')
  @HttpCode(204)
  async deleteTask(@Param('id') id: string) : Promise<void> {
    await this.taskService.deleteTask(id);
  }

  @Patch('/:id')
  async updateCompleteTask(@Param('id') id: string): Promise<Task> {
    return this.taskService.updateTaskComplete(id);
  }
}
