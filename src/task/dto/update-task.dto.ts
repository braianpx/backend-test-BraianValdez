import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty({ description: 'Nuevo título de la tarea', example: 'Comprar pan', required: false })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({ description: 'Nueva descripción de la tarea', example: 'Ir al supermercado a comprar pan', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Nuevo estado de completitud de la tarea', example: true, required: false })
  @IsBoolean()
  @IsOptional()
  complete?: boolean;
}
