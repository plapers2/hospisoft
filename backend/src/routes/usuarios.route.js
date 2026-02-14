import { Router } from "express";
import * as usuarioCtr from "../controller/usuarios.controller.js";

const router = Router();

router.get("/usuarios/listartodos", usuarioCtr.getUsuarios);
router.get("/usuarios/listarporid/:id", usuarioCtr.getUsuarioById);
router.post("/usuarios/crear", usuarioCtr.createUsuario);
router.put("/usuarios/editar/:id", usuarioCtr.updateUsuario);
router.put("/usuarios/desactivar/:id", usuarioCtr.inactiveUsuario);
router.put("/usuarios/activar/:id", usuarioCtr.activeUsuario);

export default router;
