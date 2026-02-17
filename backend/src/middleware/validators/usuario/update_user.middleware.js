import { UsuarioModel } from "../../../models/usuarios.model.js";

// Validar que el num de doc no este repetido y no corresponda al mismo usuario
export const validateDocUnicoUpdate = async (req, res, next) => {
  try {
    const validarID = await UsuarioModel.validateUpdateID(
      req.body.num_documento,
      req.params.id,
    );

    if (!validarID) {
      return res.status(400).json({
        error: `Error: Número de documento repetido`,
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      error: "Error validando documento",
    });
  }
};

// Validar que el email no este repetido y no corresponda al mismo usuario
export const validateEmailUnicoUpdate = async (req, res, next) => {
  try {
    // Validar que el email no este repetido
    const validarEmail = await UsuarioModel.validateUpdateEmail(
      req.body.email,
      req.params.id,
    );

    if (!validarEmail) {
      return res.status(400).json({
        error: `Error: Email repetido`,
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      error: "Error validando email",
    });
  }
};
