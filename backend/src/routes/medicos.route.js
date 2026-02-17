import { Router } from "express";
import * as medicoCtr from "../controller/medicos.controller.js";
import {
  validateDocUnicoCreate,
  validateEmailUnicoCreate,
} from "../middleware/validators/usuario/create_user.middleware.js";

import {
  validateDocUnicoUpdate,
  validateEmailUnicoUpdate,
} from "../middleware/validators/usuario/update_user.middleware.js";

import { validateRolBody } from "../middleware/validators/medico/create_medico.middleware.js";
import { validarRolPeticion } from "../middleware/validators/medico/update_medico.middleware.js";

const router = Router();

router.get("/medicos/listartodos", medicoCtr.getMedicos);
router.get("/medicos/listarporid/:id", medicoCtr.getMedicoById);

router.post(
  "/medicos/crear",
  validateRolBody,
  validateDocUnicoCreate,
  validateEmailUnicoCreate,
  medicoCtr.createMedico,
);

router.put(
  "/medicos/editar/:id",
  validarRolPeticion,
  validateRolBody,
  validateDocUnicoUpdate,
  validateEmailUnicoUpdate,
  medicoCtr.updateMedico,
);

export default router;
