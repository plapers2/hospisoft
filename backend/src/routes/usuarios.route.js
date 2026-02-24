import { Router } from "express";
import * as usuarioCtr from "../controller/usuarios.controller.js";
import {
  validateEmailUnicoCreate,
  validateDocUnicoCreate,
} from "../middleware/validators/usuario/create_user.middleware.js";

import {
  validateDocUnicoUpdate,
  validateEmailUnicoUpdate,
} from "../middleware/validators/usuario/update_user.middleware.js";

const router = Router();

router.get("/usuarios/listartodos", usuarioCtr.getUsuarios);
router.get("/usuarios/listarporid/:id", usuarioCtr.getUsuarioById);

router.post(
  "/usuarios/crear",
  validateDocUnicoCreate,
  validateEmailUnicoCreate,
  usuarioCtr.createUsuario,
);
router.put(
  "/usuarios/editar/:id",
  validateDocUnicoUpdate,
  validateEmailUnicoUpdate,
  usuarioCtr.updateUsuario,
);

router.put("/usuarios/desactivar/:id", usuarioCtr.inactiveUsuario);
router.put("/usuarios/activar/:id", usuarioCtr.activeUsuario);

export default router;
