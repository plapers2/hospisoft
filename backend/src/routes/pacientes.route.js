import { Router } from "express";
import * as pacienteCtr from "../controller/pacientes.controller.js";

const router = Router();

//* Rutas
router.get("/pacientes/listartodos", pacienteCtr.getPacientes);
router.get("/pacientes/listarporid/:id", pacienteCtr.getPacientesById);
router.post("/pacientes/crear", pacienteCtr.postPacientes);
router.put("/pacientes/editar/:id", pacienteCtr.putPacientes);
router.put("/pacientes/activar/:id", pacienteCtr.activatePacientes);
router.put("/pacientes/desactivar/:id", pacienteCtr.inactivatePacientes);
export default router;