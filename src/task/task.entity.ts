import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length: 50, type:'varchar'})
  title: string;

  @Column()
  description: string;

  @Column({default: false})
  complete: boolean;

  constructor(){
    this.id = uuidv4();
  }
}
