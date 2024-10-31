import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { TaskInterface } from './task.interface';
@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private TaskRepository: Repository<Task>,
    ){} 

    async createTask(task: TaskInterface){
      const newTask = this.TaskRepository.create(task);
      await this.TaskRepository.save(newTask)
      return task;
    }
    async getAllTask(){
      return await this.TaskRepository.find();
    }

  }
