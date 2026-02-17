import { Router } from "express";
import * as especialiadadesMedicosCtr from "../controller/especialidades_medicos.controller.js";

const router = Router();

router.get(
  "/usuarios_especialidades/listartodos",
  especialiadadesMedicosCtr.getEspecialidadesMedicos,
);
router.get(
  "/usuarios_especialidades/listarporid/:id",
  especialiadadesMedicosCtr.getEspecialidadesMedicosById,
);
router.post(
  "/usuarios_especialidades/crear",
  especialiadadesMedicosCtr.createEspecialidadMedicos,
);
router.put(
  "/usuarios_especialidades/editar/:id",
  especialiadadesMedicosCtr.updateEspecialidadMedicos,
);
router.delete(
  "/usuarios_especialidades/eliminar/:id",
  especialiadadesMedicosCtr.deleteEspecialidadesMedicos,
);

export default router;
