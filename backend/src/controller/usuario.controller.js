// Importamos el modelo de USUARIOS
import e from "express";
import { UsuarioModel } from "../models/usuario.model.js";

export const getUsuarios = async (req, res) => {
  try {
    const results = await UsuarioModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al listar los usuarios: ${error}`,
    });
    console.log(`Error en el controlador: ${error}`);
  }
};

export const getUsuarioById = async (req, res) => {
  try {
    const results = await UsuarioModel.findById(req.params.id);
    return res.json({ results });
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error al listar el usuario ${req.params.id}: ${error}` });
  }
};

export const createUsuario = async (req, res) => {
  try {
    const results = await UsuarioModel.create(req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al crear usuario: ${error}`,
    });
    console.log(`Error al crear usuario: ${error}`);
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const results = await UsuarioModel.update(req.body, req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al actualizar usuario ${error}`,
    });
  }
};

export const desactivarUsuario = async (req, res) => {
  try {
    const results = await UsuarioModel.desactivar(req.params.id);
    res.json({results});
  } catch (error) {
    res.status(500).json({
      error: `Error al eliminar usuario: ${error}`
    })
  }
}

export const activarUsuario = async (req, res) => {
  try {
    const results = await UsuarioModel.activar(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al eliminar usuario: ${error}`,
    });
  }
};
