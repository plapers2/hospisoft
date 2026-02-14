import { Router } from "express";
import * as UsuarioController from "../controller/usuario.controller.js";

const router = Router();

router.get("/usuarios/listartodos", UsuarioController.getUsuarios);
router.get("/usuarios/listarporid/:id", UsuarioController.getUsuarioById);
router.post("/usuarios/crear", UsuarioController.createUsuario);
router.put("/usuarios/editar/:id", UsuarioController.updateUsuario);
router.put("/usuarios/desactivar/:id", UsuarioController.desactivarUsuario);
router.put("/usuarios/activar/:id", UsuarioController.activarUsuario);

export default router;
