import { UsuarioModel } from "../../../models/usuarios.model.js";

export const validateDocUnicoCreate = async (req, res, next) => {
  // Validar que el ID no este repetido
  try {
    const validarID = await UsuarioModel.validateCreateID(
      req.body.num_documento,
    );

    if (!validarID) {
      return res.status(400).json({
        success: false,
        error: `Número de documento repetido`,
      });
    }

    // Continua la ejecucion de los middlewares
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Error validando documento",
    });
  }
};

export const validateEmailUnicoCreate = async (req, res, next) => {
  try {
    const validarEmail = await UsuarioModel.validateCreateEmail(req.body.email);

    if (!validarEmail) {
      return res.status(400).json({
        error: `Error: Email repetido`,
      });
    }

    // Continua la ejecucion de los middlewares
    next();
  } catch (error) {
    return res.json(500)({
      error: "Error validando email",
    });
  }
};
