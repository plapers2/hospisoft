export const validateRolBody = async (req, res, next) => {
  // Validar que el rol si sea medico
  if (req.body.roles_id != 2) {
    return res.status(400).json({
      success: false,
      error: `Rol no valido para medico`,
    });
  }

  next();
};
