// Importamos el modelo de ESPECIALIDADES
import { EspecialidadModel } from "../models/especialidades.model.js";

// Controlador para obtener todos las especialidades medicas
export const getEspecialidades = async (req, res) => {
  try {
    const results = await EspecialidadModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al listar las especialidades medicas: ${error}`,
    });
    console.log(`Error en el controlador: ${error}`);
  }
};

// Controlador para obtener una unica especialidad por ID
export const getEspecialidadesById = async (req, res) => {
  try {
    const results = await EspecialidadModel.findById(req.params.id);
    return res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al listar la especialidad ${req.params.id}: ${error}`,
    });
  }
};

// Controlador para crear una especialidad
export const createEspecialidad = async (req, res) => {
  try {
    const results = await EspecialidadModel.create(req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al crear especialidad: ${error}`,
    });
    console.log(`Error al crear especialidad: ${error}`);
  }
};

// controlador par actualizar una especialidad
export const updateEspecialidad = async (req, res) => {
  try {
    // Envio de la peticion
    const results = await EspecialidadModel.update(req.body, req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al actualizar especialidad: ${error}`,
    });
  }
};

// Controlador para inactivar una especialidad
export const inactiveEspecialidad = async (req, res) => {
  try {
    // Verificar que una especialidad no este asociada a un medico
    const validarEspecialidad = await EspecialidadModel.validateMedico(
      req.params.id,
    );
    if (!validarEspecialidad) {
      res.json({ error: "Error: Especialidad asociada a un medico" });
      return;
    }
    const results = await EspecialidadModel.desactivar(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al eliminar una especialidad: ${error}`,
    });
  }
};

// Controlador para activar una especialidad
export const activeEspecialidad = async (req, res) => {
  try {
    const results = await EspecialidadModel.activar(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al activar una especialidad: ${error}`,
    });
  }
};
