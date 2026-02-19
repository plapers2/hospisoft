import { horariosMedicosModel } from "../models/horariosMedicos.model.js";

export const getHorariosMedicos = async (req, res) => {
  try {
    const results = await horariosMedicosModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar los horarios medicos",
    });
  }
};
export const getHorariosMedicosById = async (req, res) => {
  try {
    const results = await horariosMedicosModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar el horario medico",
    });
  }
};
export const postHorariosMedicos = async (req, res) => {
  try {
    const results = await horariosMedicosModel.insert(req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al registrar el horario medico",
    });
  }
};
export const putHorariosMedicos = async (req, res) => {
  try {
    const results = await horariosMedicosModel.update(req.params.id, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al editar el horario medico",
    });
  }
};
export const activateHorariosMedicos = async (req, res) => {
  try {
    const results = await horariosMedicosModel.activate(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al activar el horario medico",
    });
  }
};
export const inactivateHorariosMedicos = async (req, res) => {
  try {
    const results = await horariosMedicosModel.inactivate(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al inactivar el horario medico",
    });
  }
};
