//! Capa modelo para pacientes

//* Importacion de Base de datos
import { cnx } from "./db.model.js";
//* Se activa el manejo de promesas (async)
const db = cnx.promise();

export const pacientesModel = {
  //? Listar todos los pacientes
  findAll: async function () {
    const sql = "SELECT * FROM pacientes ORDER BY id ASC;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql);
    return [rows];
  },
  findById: async function (id) {
    const sql = "SELECT * FROM pacientes WHERE id = ? ORDER BY id ASC;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, id);
    return [rows];
  },
  insert: async function (datos) {
    const sql = "INSERT INTO pacientes SET ?;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, [datos]);
    return [rows];
  },
  update: async function (id, datos) {
    const sql = "UPDATE pacientes SET ? WHERE id = ?";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, [datos, id]);
    return [rows];
  },
  activate: async function (id) {
    const sql = "UPDATE pacientes SET estado = 'Activo' WHERE id = ?;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, id);
    return [rows];
  },
  inactivate: async function (id) {
    const sql = "UPDATE pacientes SET estado = 'Inactivo' WHERE id = ?;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, id);
    return [rows];
  },
};
