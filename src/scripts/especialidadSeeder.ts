import { Especialidad } from '../models/especialidadModel'; // Adjust the path accordingly

const specialties = [
  { nombre_especialidad: 'medicina_general' },
  { nombre_especialidad: 'cardiologia' },
  { nombre_especialidad: 'medicina_interna' },
  { nombre_especialidad: 'dermatologia' },
  { nombre_especialidad: 'rehabilitacion_fisica'},
  { nombre_especialidad: 'psicologia' },
  { nombre_especialidad: 'odontologia' },
  { nombre_especialidad: 'radiologia' },
];

export const seedEspecialidades = async () => {
  try {
    for (const specialty of specialties) {
      await Especialidad.findOrCreate({
        where: { nombre_especialidad: specialty.nombre_especialidad },
        defaults: specialty,
      });
    }
  } catch (error) {
    console.error('Error seeding especialidades:', error);
  }
};
