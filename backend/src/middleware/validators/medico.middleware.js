import { MedicoModel } from "../../models/medicos.model.js";

export const validateRolMedico = async (req, res, next) => {
  // Validar que el rol si sea medico
  if (req.body.roles_id != 2) {
    res.status(400).json({
      error: `Error: Rol no valido`,
    });
  }

  next();
};

export const validateDocumentoUnico = async (req, res, next) => {
  // Validar que el ID no este repetido
  const validarID = await MedicoModel.validateCreateID(req.body.num_documento);
  if (!validarID) {
    res.status(400).json({
      error: `Error: Número de documento repetido`,
    });
    return;
  }
};
