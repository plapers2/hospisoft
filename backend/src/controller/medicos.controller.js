import { MedicoModel } from "../models/medicos.model.js";

// Controlador para obtener todos los medicos
export const getMedicos = async (req, res) => {
  try {
    const results = await MedicoModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al listar medicos: ${error}`,
    });
  }
};

// Controlador para un unico medico por ID
export const getMedicoById = async (req, res) => {
  try {
    const results = await MedicoModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al listar medico ${req.params.id}: ${error}`,
    });
  }
};

// Controlador para crear un medico
export const createMedico = async (req, res) => {
  try {
    // Validar que el rol si sea medico
    if (req.body.roles_id != 2) {
      res.status(400).json({
        error: `Error: Rol no valido`,
      });
      return;
    }

    // Validar que el ID no este repetido
    const validarID = await MedicoModel.validateCreateID(
      req.body.num_documento,
    );
    if (!validarID) {
      res.status(400).json({
        error: `Error: Número de documento repetido`,
      });
      return;
    }

    // Validar que el email no este repetido
    const validarEmail = await MedicoModel.validateCreateEmail(req.body.email);
    if (!validarEmail) {
      res.status(400).json({
        error: `Error: Email repetido`,
      });
      return;
    }

    const results = await MedicoModel.create(req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al crear medicos: ${error}`,
    });
  }
};

// Controlador para editar un medico
export const updateMedico = async (req, res) => {
  try {
    // ID del medico
    const id = req.params.id;

    // Validar que el id ingresado sea de un medico
    const validarRol = await MedicoModel.validateUpdateRol(id);

    if (!validarRol) {
      res.status(400).json({
        error: `Error: Rol no valido en la peticion`,
      });
      return;
    }

    // Validar que el rol sea el indicado para medico
    if (req.body.roles_id != 2) {
      res.status(400).json({
        error: `Error: Rol no valido en el body`,
      });
      return;
    }

    // Validar que el Num de doc no este repetido y no corresponda al mismo usuario
    const validarID = await MedicoModel.validateUpdateID(
      req.body.num_documento,
      id,
    );

    if (!validarID) {
      res.status(400).json({
        error: `Error: Número de documento repetido`,
      });
      return;
    }

    // Validar que el email no este repetido
    const validarEmail = await MedicoModel.validateUpdateEmail(
      req.body.email,
      id,
    );
    if (!validarEmail) {
      res.status(400).json({
        error: `Error: Email repetido`,
      });
      return;
    }

    // Envio de la peticion
    const results = await MedicoModel.update(req.body, id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al editar medicos: ${error}`,
    });
  }
};
