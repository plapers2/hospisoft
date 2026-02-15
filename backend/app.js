import express from "express";
import cors from "cors";
import UsuarioRutas from "./src/routes/usuarios.route.js";
import MedicoRutas from "./src/routes/medicos.route.js";
import EspecialidadRutas from "./src/routes/especialidades.model.js";

// Instancia global
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

//Rutas
app.use("/api", UsuarioRutas);
app.use("/api", MedicoRutas);
app.use("/api", EspecialidadRutas);

export default app;
