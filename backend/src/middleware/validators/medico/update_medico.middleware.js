import { MedicoModel } from "../../../models/medicos.model.js";
export const validarRolPeticion = async (req, res, next) => {
  try {
    // Validar que el id ingresado sea de un medico
    const validarRol = await MedicoModel.validateUpdateRol(req.params.id);

    if (!validarRol) {
      return res.status(400).json({
        error: `Error: Rol no valido en la peticion`,
      });
    }

    next();
  } catch (error) {
    console.log(error);
  }
};
