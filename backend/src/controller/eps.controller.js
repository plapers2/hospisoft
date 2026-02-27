import { EpsModel } from "../models/eps.model.js";

export const getEps = async (req, res) => {
  try {
    const results = await EpsModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al listar las EPSs" });
  }
};

export const getEpsById = async (req, res) => {
  try {
    const results = await EpsModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: `Error al listar la EPS ${req.params.id}` });
  }
};

export const createEps = async (req, res) => {
  try {
    const results = await EpsModel.create(req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: `Error al crear la EPS  ${error}` });
  }
};

export const updateEps = async (req, res) => {
  try {
    const results = await EpsModel.update(req.body, req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: `Error al editar una EPS` });
  }
};

export const inactiveEps = async (req, res) => {
  try {
    const results = await EpsModel.inactive(req.params.id);
    res.json({ results });
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error al inactivar la EPS ${req.params.id}` });
  }
};

export const activeEps = async (req, res) => {
  try {
    const results =await EpsModel.active(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: `Error al activar la EPS ${req.params.id}` });
  }
};
