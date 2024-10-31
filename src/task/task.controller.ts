import { Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { TaskInterface } from './task.interface';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
}
