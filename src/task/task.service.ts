import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { TaskInterface } from './task.interface';
@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    ){} 

  async createTask(createTaskDto: TaskInterface): Promise<Task> {
    const newTask = this.taskRepository.create(createTaskDto);
    return await this.taskRepository.save(newTask);
  }

  async getAllTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async updateTask(id: string, updateTaskDto: TaskInterface): Promise<Task> {
    await this.taskRepository.update(id, updateTaskDto);
    return await this.taskRepository.findOneBy({ id });
  }

  async updateTaskComplete(id: string): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ id });
    const newStatusComplete = !task.complete;
    task.complete = newStatusComplete;
    await this.taskRepository.save(task);
    return task;
  }

  async deleteTask(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
}

