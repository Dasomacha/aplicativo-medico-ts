import { RequestHandler } from 'express';
import { Doctor } from '../models/doctorModel';
import { Op } from 'sequelize';

export const getDoctors: RequestHandler = async (req, res, next) => {
  try {
    const doctors = await Doctor.findAll();
    res.status(200).json({ message: 'Operación exitosa', data: doctors });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: 'Hubo un error al obtener los doctores', error: err.message });
  }
};

export const getDoctorById: RequestHandler = async (req, res, next) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (doctor) {
      res.status(200).json({ message: 'Operación exitosa', data: doctor });
    } else {
      res.status(404).json({ message: 'Doctor no encontrado' });
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: 'Hubo un error al obtener el doctor', error: err.message });
  }
};

export const createDoctor: RequestHandler = async (req, res, next) => {
  try {
    // Verifica si ya existe un doctor con el mismo consultorio
    const existingDoctor = await Doctor.findOne({ where: { consultorio: req.body.consultorio } });

    if (existingDoctor) {
      res.status(400).json({ message: 'El consultorio ya está en uso por otro doctor.' });
      return;
    }
    // Crea el doctor
    const doctor = await Doctor.create(req.body);
    res.status(201).json({ message: 'Doctor creado exitosamente', data: doctor });
  } catch (error: any) {
    if (error.name === 'SequelizeValidationError') {
        res.status(400).json({ message: 'Correo no valido' });
    } else {
        const err = error as Error;
        res.status(500).json({ message: 'Hubo un error al crear el doctor', error: err.message });
    }
  }
};

export const updateDoctor: RequestHandler = async (req, res, next) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);

    if (!doctor) {
      res.status(404).json({ message: 'Doctor no encontrado' });
      return;
    }
    const consultorioInUse = await Doctor.findOne({
      where: {
        consultorio: req.body.consultorio,
        id_profesional: { [Op.not]: req.params.id } // Excluye el doctor actual
      }
    });
    if (consultorioInUse) {
      res.status(400).json({ message: 'El consultorio ya está en uso por otro doctor.' });
      return;
    }
    await Doctor.update(req.body, { where: { id_profesional: req.params.id } });
    const updatedDoctor = await Doctor.findByPk(req.params.id);
    res.status(200).json({ message: 'Doctor actualizado exitosamente', data: updatedDoctor });
  } catch (error: any) {
    if (error.name === 'SequelizeValidationError') {
      res.status(400).json({ message: 'Correo no valido' });
    } else {
      const err = error as Error;
      res.status(500).json({ message: 'Hubo un error al actualizar el doctor', error: err.message });
    }
  }
};

export const deleteDoctor: RequestHandler = async (req, res, next) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) {
      res.status(404).json({ message: 'Doctor no encontrado' });
      return;
    } else {
      await Doctor.destroy({ where: { id_profesional: req.params.id } });
      res.status(200).json({ message: 'Doctor eliminado exitosamente' });
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: 'Hubo un error al eliminar el doctor', error: err.message });
  }
};