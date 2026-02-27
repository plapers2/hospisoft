//* Se importa el modelo
import { pacientesModel } from "../models/pacientes.model.js";

//* Trae todos los pacientes
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
//* Trae paciente por ID
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
//* Crea un paciente
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
//* Modifica un paciente
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
//* Cambia estado a Activo
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
//* Cambia estado a Inactivo
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
