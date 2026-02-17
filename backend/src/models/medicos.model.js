// Importamos la conexion
import cnx from "./db.model.js";

// Habilitamos las promesas
const db = cnx.promise();

// Declaramos el modelo a exportar
export const MedicoModel = {
  findAll: async () => {
    const sql =
      "SELECT usuarios.*, especialidades.* FROM usuarios JOIN usuarios_especialidades ON usuarios_especialidades.usuarios_id = usuarios.id JOIN especialidades ON especialidades.id = usuarios_especialidades.especialidades_id;";
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql =
      "SELECT usuarios.*, especialidades.* FROM usuarios JOIN usuarios_especialidades ON usuarios_especialidades.usuarios_id = usuarios.id JOIN especialidades ON especialidades.id = usuarios_especialidades.especialidades_id WHERE usuarios.id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data) => {
    const sql = "INSERT INTO usuarios SET ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },
  update: async (data, id) => {
    const sql = "UPDATE usuarios SET ? WHERE id = ?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },

  validateUpdateRol: async (id) => {
    const sql = "SELECT roles_id FROM usuarios WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    if (rows[0].roles_id === 2) {
      return true;
    } else {
      return false;
    }
  },
};
