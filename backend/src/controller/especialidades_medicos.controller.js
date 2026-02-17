// Importamos el modelo de ESPECIALIDADES
import { EspecialidadesMedicosModel } from "../models/especialidades_medicos.model.js";

// Controlador para obtener todos las especialidades medicas y los medicos asociados
export const getEspecialidadesMedicos = async (req, res) => {
  try {
    const results = await EspecialidadesMedicosModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al listar las especialidades medicas: ${error}`,
    });
    console.log(`Error en el controlador: ${error}`);
  }
};

// Controlador para obtener una especialidad por todos los medicos del sistema
export const getEspecialidadesMedicosById = async (req, res) => {
  try {
    const results = await EspecialidadesMedicosModel.findById(req.params.id);
    return res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al listar la especialidad ${req.params.id}: ${error}`,
    });
  }
};

// Controlador para asignar varios especialidades a los medicos
export const createEspecialidadMedicos = async (req, res) => {
  try {
    const results = await EspecialidadesMedicosModel.create(req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al crear especialidad: ${error}`,
    });
    console.log(`Error al crear especialidad: ${error}`);
  }
};

// controlador para actualizar una especialidad
export const updateEspecialidadMedicos = async (req, res) => {
  const id = req.params.id;   
  const deleteEspecialidades = await EspecialidadesMedicosModel.delete(id);
  console.log(deleteEspecialidades);
    try {
      // Envio de la peticion
      const results = await EspecialidadesMedicosModel.update(req.body, req.params.id);
      res.json({ results });
    } catch (error) {
      res.status(500).json({
        error: `Error al actualizar especialidad: ${error}`,
      });
    }
 
};

export const deleteEspecialidadesMedicos = async (req, res) => {
  try {
    const results = await EspecialidadesMedicosModel.delete(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al eliminar el registro de especialidades de los medicos: ${error}`,
    });
  }
};
