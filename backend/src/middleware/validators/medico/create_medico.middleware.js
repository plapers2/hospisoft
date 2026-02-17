
export const validateRolBody = async (req, res, next) => {
  // Validar que el rol si sea medico
  if (req.body.roles_id != 2) {
    res.status(400).json({
      error: `Error: Rol no valido`,
    });
  }

  next();
};
