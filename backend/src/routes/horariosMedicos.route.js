import { Router } from "express";
import * as pacienteCtr from "../controller/horariosMedicos.controller.js";

const router = Router();

router.get("/horariosMedicos/listartodos", pacienteCtr.getHorariosMedicos);
router.get("/horariosMedicos/listarporid/:id", pacienteCtr.getHorariosMedicosById);
router.post("/horariosMedicos/crear", pacienteCtr.postHorariosMedicos);
router.put("/horariosMedicos/editar/:id", pacienteCtr.putHorariosMedicos);
router.put("/horariosMedicos/activar/:id", pacienteCtr.activateHorariosMedicos);
router.put("/horariosMedicos/desactivar/:id", pacienteCtr.inactivateHorariosMedicos);
export default router;