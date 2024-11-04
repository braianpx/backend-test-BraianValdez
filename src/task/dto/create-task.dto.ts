import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ description: 'Título de la tarea', example: 'Comprar leche' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Descripción de la tarea', example: 'Ir al supermercado a comprar leche' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'Estado de completitud de la tarea', example: false, required: false })
  @IsBoolean()
  @IsOptional()
  complete?: boolean;
}
