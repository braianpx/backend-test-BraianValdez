import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('task')
@ApiTags('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Obtener todas las tareas' })
  @ApiResponse({ status: 200, description: 'Tareas obtenidas correctamente', type: [Task] })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async getAllTask(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Crear una nueva tarea' })
  @ApiBody({ type: CreateTaskDto, description: 'Datos necesarios para crear una nueva tarea' })
  @ApiResponse({ status: 201, description: 'Tarea creada exitosamente', type: Task })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(createTaskDto);
  }

  @Put('/:id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Actualizar una tarea existente por ID' })
  @ApiParam({ name: 'id', description: 'ID de la tarea a actualizar' })
  @ApiBody({ type: UpdateTaskDto, description: 'Datos opcionales para actualizar la tarea' })
  @ApiResponse({ status: 200, description: 'Tarea actualizada exitosamente', type: Task })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.taskService.updateTask(id, updateTaskDto);
  }

  @Delete('/:id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Eliminar una tarea por ID' })
  @ApiParam({ name: 'id', description: 'ID de la tarea a eliminar' })
  @ApiResponse({ status: 204, description: 'Tarea eliminada exitosamente' })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async deleteTask(@Param('id') id: string) : Promise<void> {
    await this.taskService.deleteTask(id);
  }

  @Patch('/:id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Marcar una tarea como completa/incompleta por ID' })
  @ApiParam({ name: 'id', description: 'ID de la tarea para cambiar su estado de completitud' })
  @ApiResponse({ status: 200, description: 'Estado de completitud de la tarea actualizado', type: Task })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async updateCompleteTask(@Param('id') id: string): Promise<Task> {
    return this.taskService.updateTaskComplete(id);
  }
}
