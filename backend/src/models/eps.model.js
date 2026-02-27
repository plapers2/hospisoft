import cnx from "./db.model.js";

const db = cnx.promise();

export const EpsModel = {
  findAll: async () => {
    const sql = "SELECT * FROM eps";
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql = "SELECT * FROM eps WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data) => {
    const sql = "INSERT INTO eps SET ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },
  update: async (data, id) => {
    const sql = "UPDATE eps SET ? WHERE id = ?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
  inactive: async (id) => {
    const estado = "Inactiva";
    const sql = "UPDATE eps SET estado = ? WHERE id = ?";
    const [rows] = await db.query(sql, [estado, id]);
    return rows;
  },
  active: async (id) => {
    const estado = "Activa";
    const sql = "UPDATE eps SET estado = ? WHERE id = ?";
    const [rows] = await db.query(sql, [estado, id]);
    return rows;
  },
};
