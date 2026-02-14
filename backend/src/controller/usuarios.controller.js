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
    console.log(`Error en el controlador: ${error}`);
  }
};

// Controlador para obtener un unico usuario por ID
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

// Controlador para crear un usuario
export const createUsuario = async (req, res) => {
  try {
    // Validar que el ID no este repetido
    const validarID = await UsuarioModel.validateCreateID(
      req.body.num_documento,
    );
    if (!validarID) {
      res.status(400).json({
        error: `Error: Número de documento repetido`,
      });
      return;
    }

    // Validar que el email no este repetido
    const validarEmail = await UsuarioModel.validateCreateEmail(req.body.email);
    if (!validarEmail) {
      res.status(400).json({
        error: `Error: Email repetido`,
      });
      return;
    }

    const results = await UsuarioModel.create(req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al crear usuario: ${error}`,
    });
    console.log(`Error al crear usuario: ${error}`);
  }
};

// controlador par actualizar un usuario
export const updateUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    // Validar que el Num de doc no este repetido y no corresponda al mismo usuario
    const validarID = await UsuarioModel.validateUpdateID(
      req.body.num_documento,
      id,
    );

    if (!validarID) {
      res.status(400).json({
        error: `Error: Número de documento repetido`,
      });
      return;
    }

    // Validar que el email no este repetido
    const validarEmail = await UsuarioModel.validateUpdateEmail(
      req.body.email,
      id,
    );
    if (!validarEmail) {
      res.status(400).json({
        error: `Error: Email repetido`,
      });
      return;
    }

    // Envio de la peticion
    const results = await UsuarioModel.update(req.body, id);
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
