export const validateDocumentoUnico = async (req, res, next) => {
  // Validar que el ID no este repetido
  try {
    const validarID = await MedicoModel.validateCreateID(
      req.body.num_documento,
    );

    if (!validarID) {
      res.status(400).json({
        error: `Error: Número de documento repetido`,
      });
      return;
    }

    // Continua la ejecucion de los middlewares
    next();
  } catch (error) {
    return res.status(500).json({
      error: "Error validando documento",
    });
  }
};

export const validateEmailUnico = async (req, res, next) => {
  try {
    const validarEmail = await UsuarioModel.validateCreateEmail(req.body.email);

    if (!validarEmail) {
      res.status(400).json({
        error: `Error: Email repetido`,
      });
      return;
    }

    // Continua la ejecucion de los middlewares
    next();
  } catch (error) {
    return res.json(500).json({
      error: "Error validando email",
    });
  }
};
