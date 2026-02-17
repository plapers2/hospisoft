import { MedicoModel } from "../models/medicos.model.js";

// Controlador para obtener todos los medicos
export const getMedicos = async (req, res) => {
  try {
    const results = await MedicoModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al listar medicos: ${error}`,
    });
  }
};

// Controlador para un unico medico por ID
export const getMedicoById = async (req, res) => {
  try {
    const results = await MedicoModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al listar medico ${req.params.id}: ${error}`,
    });
  }
};

// Controlador para crear un medico
export const createMedico = async (req, res) => {
  try {
    const results = await MedicoModel.create(req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al crear medicos: ${error}`,
    });
  }
};

// Controlador para editar un medico
export const updateMedico = async (req, res) => {
  try {
    // Envio de la peticion
    const results = await MedicoModel.update(req.body, req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al editar medicos: ${error}`,
    });
  }
};
