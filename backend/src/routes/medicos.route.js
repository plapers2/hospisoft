import { Router } from "express";
import * as medicoCtr from "../controller/medicos.controller.js";

const router = Router();

router.get("/medicos/listartodos", medicoCtr.getMedicos);
router.get("/medicos/listarporid/:id", medicoCtr.getMedicoById);
router.post("/medicos/crear", medicoCtr.createMedico);
router.put("/medicos/editar/:id", medicoCtr.updateMedico);

export default router;
