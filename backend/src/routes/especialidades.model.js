import { Router } from "express";
import * as especialiadadesCtr from "../controller/especialiadades.controller.js";

const router = Router();

router.get("/especialidades/listartodos", especialiadadesCtr.getEspecialidades);
router.get("/especialidades/listarporid/:id", especialiadadesCtr.getEspecialidadesById);
router.post("/especialidades/crear", especialiadadesCtr.createEspecialidad);
router.put("/especialidades/editar/:id", especialiadadesCtr.updateEspecialidad);
router.put("/especialidades/desactivar/:id", especialiadadesCtr.inactiveEspecialidad);
router.put("/especialidades/activar/:id", especialiadadesCtr.activeEspecialidad);

export default router;
