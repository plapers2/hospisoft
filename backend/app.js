import express from "express";
import cors from 'cors';
import UsuarioRutas from "./src/routes/usuario.route.js"

// Instancia global
const app = express();


// Middlewares
app.use(cors());
app.use(express.json())

//Rutas
app.use("/api", UsuarioRutas);

export default app
