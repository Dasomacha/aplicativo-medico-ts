import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Cita } from './citaModel';
import { Especialidad } from './especialidadModel';

@Table({
  timestamps: false,
  tableName: 'doctor',
})
export class Doctor extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id_profesional!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  apellido!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isEmail: true, // Validación de formato de correo electrónico
    },
  })
  correo!: string;

  @ForeignKey(() => Especialidad)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_especialidad!: number;

  @BelongsTo(() => Especialidad)
  especialidad!: Especialidad;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  consultorio!: number;

  @HasMany(() => Cita)
  citas!: Cita[];
}
