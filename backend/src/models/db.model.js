import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
let cnx;

try {
  cnx = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  console.log(`¡Conexión a MySQL exitosa!: ${process.env.PASSWORD}`);
} catch (error) {
  console.log(`Ha ocurrido un error en la conexion: ${error.message}`);
}
export default cnx;
