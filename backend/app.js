import express from "express";
import cors from "cors";
//* Import de rutas
import UsuarioRutas from "./src/routes/usuarios.route.js";
import MedicoRutas from "./src/routes/medicos.route.js";
import EspecialidadRutas from "./src/routes/especialidades.route.js";
import horariosMedicosRutas from "./src/routes/horariosMedicos.route.js";
import medicamentosRutas from "./src/routes/medicamentos.route.js";

//* Instancia global
const app = express();

//* Middlewares
app.use(cors());
app.use(express.json());

//* Rutas
app.use("/api", UsuarioRutas);
app.use("/api", MedicoRutas);
app.use("/api", EspecialidadRutas);
app.use("/api", horariosMedicosRutas);
app.use("/api", medicamentosRutas);

export default app;
