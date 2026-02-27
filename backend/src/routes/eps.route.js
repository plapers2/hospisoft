import { Router } from "express";
import * as EpsCtr from "../controller/eps.controller.js";

const router = Router();

router.get("/eps/listartodos", EpsCtr.getEps);
router.get("/eps/listarporid/:id", EpsCtr.getEpsById);
router.post("/eps/crear", EpsCtr.createEps);
router.put("/eps/editar/:id", EpsCtr.updateEps);
router.put("/eps/activar/:id", EpsCtr.activeEps);
router.put("/eps/inactivar/:id", EpsCtr.inactiveEps);

export default router;
