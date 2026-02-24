// Importar la base de datos
import cnx from "./db.model.js";

// Habilitar las promesas en mysql2
const db = cnx.promise();

// Modelo para la entidad de ESPECIALIDADES
export const EspecialidadModel = {
  findAll: async () => {
    const sql = "SELECT * FROM especialidades";
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql = "SELECT * FROM especialidades WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data) => {
    const sql = "INSERT INTO especialidades SET ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },
  update: async (data, id) => {
    const sql = "UPDATE especialidades SET ?  WHERE id = ?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
  desactivar: async (id) => {
    const estado = "Inactivo";
    const sql = "UPDATE especialidades SET estado = ? WHERE id = ?";
    const [rows] = await db.query(sql, [estado, id]);
    return rows;
  },
  activar: async (id) => {
    const estado = "Activo";
    const sql = "UPDATE especialidades SET estado = ? WHERE id = ?";
    const [rows] = await db.query(sql, [estado, id]);
    return rows;
  },
  validateMedico: async (idEspecialidad) => {
    const sql =
      "SELECT 1 FROM usuarios_especialidades WHERE especialidades_id = ?";
    const [rows] = await db.query(sql, [idEspecialidad]);
    if (rows.length > 0) {
      return false;
    }

    return true;
  },
};
