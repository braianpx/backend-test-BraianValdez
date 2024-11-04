import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: 'f5b7c9e0-7d8a-4c4a-9d5c-11e1d3e2a2e0', description: 'Identificador único de la tarea (UUID)' })
  id: string;
  
  @Column({length: 50, type:'varchar'})
  @ApiProperty({ example: 'Hacer las compras', description:'titulo de la tarea' })
  title: string;

  @Column()
  @ApiProperty({ example: 'Realizar las compras de la semana en el supermercado', description:'Descripcion de la tarea' })
  description: string;

  @Column({default: false})
  @ApiProperty({ example: false , description:'Estado de la tarea' })
  complete: boolean;

  constructor(){
    this.id = uuidv4();
  }
}
