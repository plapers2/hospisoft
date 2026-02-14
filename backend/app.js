import express from "express";
import cors from "cors";
//* Importar rutas
import rolesRutas from "./src/routes/roles.route.js";
// Instancia global
const app = express();
// Middlewares
app.use(cors());
app.use(express.json());
//* Rutas
app.use("/api", rolesRutas);
export default app;