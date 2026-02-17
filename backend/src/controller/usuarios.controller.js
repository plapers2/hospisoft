// Importamos el modelo de USUARIOS
import { UsuarioModel } from "../models/usuarios.model.js";

// Controlador para obtener todos los usuarios
export const getUsuarios = async (req, res) => {
  try {
    const results = await UsuarioModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al listar los usuarios: ${error}`,
    });
  }
};

// Controlador para obtener un unico usuario por ID
export const getUsuarioById = async (req, res) => {
  try {
    const results = await UsuarioModel.findById(req.params.id);
    return res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al listar el usuario ${req.params.id}: ${error}`,
    });
  }
};

// Controlador para crear un usuario
export const createUsuario = async (req, res) => {
  try {
    const results = await UsuarioModel.create(req.body);
    console.log(results)
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al crear usuario: ${error}`,
    });
  }
};

// controlador par actualizar un usuario
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

// Controlador para inactivar un usuario
export const inactiveUsuario = async (req, res) => {
  try {
    const results = await UsuarioModel.desactivar(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al eliminar usuario: ${error}`,
    });
  }
};

// Controlador para activar un usuario
export const activeUsuario = async (req, res) => {
  try {
    const results = await UsuarioModel.activar(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al eliminar usuario: ${error}`,
    });
  }
};
