import { Router } from "express";
import * as medicamentosCtr from "../controller/medicamentos.controller.js";

const router = Router();

router.get("/medicamentos/listartodos", medicamentosCtr.getMedicamentos);
router.get("/medicamentos/listarporid/:id", medicamentosCtr.getMedicamentosById);
router.post("/medicamentos/crear", medicamentosCtr.postMedicamentos);
router.put("/medicamentos/editar/:id", medicamentosCtr.putMedicamentos);
router.put("/medicamentos/activar/:id", medicamentosCtr.activateMedicamentos);
router.put("/medicamentos/desactivar/:id", medicamentosCtr.inactivateMedicamentos);
export default router;
