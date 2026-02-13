import { pacientesModel } from "../models/pacientes.model.js";

export const getPacientes = async (req, res) => {
  try {
    const results = await pacientesModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar los pacientes",
    });
  }
};
export const getPacientesById = async (req, res) => {
  try {
    const results = await pacientesModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar el paciente",
    });
  }
};
export const postPacientes = async (req, res) => {
  try {
    const results = await pacientesModel.insert(req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al registrar el paciente",
    });
  }
};
export const putPacientes = async (req, res) => {
  try {
    const results = await pacientesModel.update(req.params.id, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al editar el paciente",
    });
  }
};
export const activatePacientes = async (req, res) => {
  try {
    const results = await pacientesModel.activate(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al activar el paciente",
    });
  }
};
export const inactivatePacientes = async (req, res) => {
  try {
    const results = await pacientesModel.inactivate(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al inactivar el paciente",
    });
  }
};
