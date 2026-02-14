import express from "express";
import cors from "cors";
//* Importar rutas
import medicamentosRutas from "./src/routes/roles.route.js";
// Instancia global
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

//* Rutas
app.use("/api", medicamentosRutas);

export default app;
