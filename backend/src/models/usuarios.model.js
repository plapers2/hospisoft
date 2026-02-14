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
};
