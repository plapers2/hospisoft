//! Capa modelo para medicamentos
//* Importacion de Base de datos
import { cnx } from "./db.model.js";
//* Se activa el manejo de promesas (async)
const db = cnx.promise();
export const medicamentosModel = {
  //? Listar todos los medicamentos
  findAll: async function () {
    const sql = "SELECT * FROM medicamentos ORDER BY id ASC;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql);
    return [rows];
  },
  findById: async function (id) {
    const sql = "SELECT * FROM medicamentos WHERE id = ? ORDER BY id ASC;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, id);
    return [rows];
  },
  insert: async function (datos) {
    const valorTotal = datos.stock_actual * datos.precio_unitario;
    const sql = "INSERT INTO medicamentos SET ?, valor_total = ?;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, [datos, valorTotal]);
    return [rows];
  },
  update: async function (id, datos) {
    const valorTotal = datos.stock_actual * datos.precio_unitario;
    const sql = "UPDATE medicamentos SET ?, valor_total = ? WHERE id = ?";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, [datos, valorTotal, id]);
    return [rows];
  },
  activate: async function (id) {
    const sql = "UPDATE medicamentos SET estado = 'Activo' WHERE id = ?;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, id);
    return [rows];
  },
  inactivate: async function (id) {
    const sql = "UPDATE medicamentos SET estado = 'Inactivo' WHERE id = ?;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, id);
    return [rows];
  },
};
