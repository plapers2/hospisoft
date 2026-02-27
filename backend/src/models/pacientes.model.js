//! Capa modelo para pacientes

//* Importacion de Base de datos
import cnx from "./db.model.js";
//* Se activa el manejo de promesas (async)
const db = cnx.promise();

//* Modelo de pacientes
export default pacientesModel = {
  //? Listar todos los pacientes
  findAll: async function () {
    const sql = "SELECT * FROM pacientes ORDER BY id ASC;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql);
    return [rows];
  },
  //? Listar paciente por ID
  findById: async function (id) {
    const sql = "SELECT * FROM pacientes WHERE id = ? ORDER BY id ASC;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, id);
    return [rows];
  },
  //? Crear paciente
  insert: async function (datos) {
    const sql = "INSERT INTO pacientes SET ?;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, [datos]);
    return [rows];
  },
  //? Modificar paciente
  update: async function (id, datos) {
    const sql = "UPDATE pacientes SET ? WHERE id = ?";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, [datos, id]);
    return [rows];
  },
  //? Activar paciente
  activate: async function (id) {
    const sql = "UPDATE pacientes SET estado = 'Activo' WHERE id = ?;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, id);
    return [rows];
  },
  //? Desactivar paciente
  inactivate: async function (id) {
    const sql = "UPDATE pacientes SET estado = 'Inactivo' WHERE id = ?;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, id);
    return [rows];
  },
};
