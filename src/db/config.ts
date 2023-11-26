import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { Paciente } from "../models/pacienteModel";
import { Cita } from "../models/citaModel";
import { Doctor } from "../models/doctorModel";
import { Especialidad } from '../models/especialidadModel';


dotenv.config();

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.HOST,
  username: 'root',
  password: process.env.PASSWORD,
  database: process.env.DB,
  logging: false,
  models: [Paciente, Doctor, Cita, Especialidad]
});

export default connection;