// Importar la base de datos
import cnx from "./db.model.js";

// Habilitar las promesas en mysql2
const db = cnx.promise();

// Modelo para la entidad de ESPECIALIDADES
export const EspecialidadesMedicosModel = {
  findAll: async () => {
    const sql =
      "SELECT usuarios.*, especialidades.* FROM usuarios JOIN usuarios_especialidades ON usuarios_especialidades.usuarios_id = usuarios.id JOIN especialidades ON especialidades.id = usuarios_especialidades.especialidades_id;";
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql =
      "SELECT usuarios.*, especialidades.* FROM usuarios JOIN usuarios_especialidades ON usuarios_especialidades.usuarios_id = usuarios.id JOIN especialidades ON especialidades.id = usuarios_especialidades.especialidades_id WHERE usuarios_especialidades.especialidades_id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (datos) => {
    let rows;
    let resultado = [];
    datos.forEach(async (dato) => {
      const sql = "INSERT INTO usuarios_especialidades SET ?";
      [rows] = await db.query(sql, [dato]);
    });
    resultado = {
      success: true,
      message: "Asignacion de especialidades a medicos exitosa",
    };
    return resultado;
  },
  update: async (datos, id) => {
    let rows;
    let resultado = [];
    datos.forEach(async (dato) => {
      const sql = "INSERT INTO usuarios_especialidades SET ?";
      [rows] = await db.query(sql, [dato]);
    });
    resultado = {
      success: true,
      message: "Reasignación de especialidades a medicos exitosa",
    };
    return resultado;
  },

  delete: async (id) => {
    const sql = "DELETE FROM usuarios_especialidades WHERE usuarios_id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
};
