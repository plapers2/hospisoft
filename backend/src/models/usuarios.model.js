// Importar la base de datos
import cnx from "./db.model.js";

// Habilitar las promesas en mysql2
const db = cnx.promise();

// Modelo para la entidad de USUARIOS
export const UsuarioModel = {
  findAll: async () => {
    const sql = "SELECT * FROM usuarios";
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql = "SELECT * FROM usuarios WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data) => {
    const sql = "INSERT INTO usuarios SET ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },
  update: async (data, id) => {
    const sql = "UPDATE usuarios SET ?  WHERE id = ?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
  desactivar: async (id) => {
    const estado = "Inactivo";
    const sql = "UPDATE usuarios SET estado = ? WHERE id = ?";
    const [rows] = await db.query(sql, [estado, id]);
    return rows;
  },
  activar: async (id) => {
    const estado = "Activo";
    const sql = "UPDATE usuarios SET estado = ? WHERE id = ?";
    const [rows] = await db.query(sql, [estado, id]);
    return rows;
  },

  validateCreateID: async (num_documento) => {
    const sql = "SELECT 1 FROM usuarios WHERE num_documento = ?";
    const [rows] = await db.query(sql, [num_documento]);
    if (rows.length > 0) {
      return false;
    } else {
      return true;
    }
  },

  validateUpdateID: async (num_documento, id) => {
    const sql = "SELECT 1 FROM usuarios WHERE num_documento = ? AND id != ?";
    const [rows] = await db.query(sql, [num_documento, id]);
    if (rows.length > 0) {
      return false;
    } else {
      return true;
    }
  },

  validateCreateEmail: async (email) => {
    const sql = "SELECT 1 FROM usuarios WHERE email = ?";
    const [rows] = await db.query(sql, [email]);
    if (rows.length > 0) {
      return false;
    } else {
      return true;
    }
  },

  validateUpdateEmail: async (email, id) => {
    const sql = "SELECT 1 FROM usuarios WHERE email = ? AND id != ?";
    const [rows] = await db.query(sql, [email, id]);
    if (rows.length > 0) {
      return false;
    } else {
      return true;
    }
  },
};
