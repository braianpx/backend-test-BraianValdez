import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    ){} 

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    try{
      const newTask = this.taskRepository.create(createTaskDto);
      return await this.taskRepository.save(newTask);
    }catch(err){
      throw new InternalServerErrorException([err.message]);
    }
  }

  async getAllTasks(): Promise<Task[]> {
    try{
      const tasks = await this.taskRepository.find();
      return tasks
    }catch(err){
      throw new InternalServerErrorException([err.message]);
    }
  }

  async updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    if(!Object.values(updateTaskDto)[0]) throw new BadRequestException(['Faltan datos para modificar la tarea']);// se valida que hayan datos para modificar
    let task:Task
    try{
      task = await this.taskRepository.findOneBy({ id });
    }catch(err){
      throw new NotFoundException(['La tarea seleccionada no existe']);
    }
    const editTask = {...task, ...updateTaskDto}
    await this.taskRepository.save(editTask);
    return await this.taskRepository.findOneBy({ id });
  }

  async updateTaskComplete(id: string): Promise<Task> {
    if(!id) throw new BadRequestException(['Faltan datos']);
    let task:Task
    try{
      task = await this.taskRepository.findOneBy({ id });
    }catch(err){
      throw new NotFoundException(['La tarea seleccionada no existe']);
    }  
    const newStatusComplete = !task.complete;
    task.complete = newStatusComplete;
    await this.taskRepository.save(task);
    return task
  }

  async deleteTask(id: string) {
    if(!id) throw new BadRequestException(['Faltan datos']);
    let task
    try{
      task = await this.taskRepository.delete(id);
    }catch(err){
      throw new NotFoundException(['La tarea seleccionada no existe']);
    }
    return task
  }
}

