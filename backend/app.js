import express from "express";
import cors from 'cors';
//* Importar rutas
import pacientesRutas from "./src/routes/pacientes.route.js";
// Instancia global
const app = express();


// Middlewares
app.use(cors());
app.use(express.json())

//* Rutas
app.use("/api",pacientesRutas);

export default app
