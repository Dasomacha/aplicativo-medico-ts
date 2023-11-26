import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Doctor } from './doctorModel';

@Table({
  timestamps: false,
  tableName: 'especialidad',
})
export class Especialidad extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id_especialidad!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  nombre_especialidad!: string;

  @HasMany(() => Doctor)
  doctores!: Doctor[];
}

