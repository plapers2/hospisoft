import { Router } from "express";
import * as medicoCtr from "../controller/medicos.controller.js";
import {
  validateDocUnicoCreate,
  validateEmailUnicoCreate,
} from "../middleware/validators/usuario/create_user.middleware.js";

const router = Router();

router.get("/medicos/listartodos", medicoCtr.getMedicos);
router.get("/medicos/listarporid/:id", medicoCtr.getMedicoById);
router.post(
  "/medicos/crear",
  validateDocUnicoCreate,
  validateEmailUnicoCreate,
  medicoCtr.createMedico,
);
router.put("/medicos/editar/:id", medicoCtr.updateMedico);

export default router;
