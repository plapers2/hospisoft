import { rolesModel } from "../models/roles.model.js";

export const getRoles = async (req, res) => {
  try {
    const results = await rolesModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar los roles",
    });
  }
};
export const getRolesById = async (req, res) => {
  try {
    const results = await rolesModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar el rol",
    });
  }
};
export const postRoles = async (req, res) => {
  try {
    const results = await rolesModel.insert(req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al registrar el rol",
    });
  }
};
export const putRoles = async (req, res) => {
  try {
    const results = await rolesModel.update(req.params.id, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al editar el rol",
    });
  }
};
// export const activateRoles = async (req, res) => {
//   try {
//     const results = await rolesModel.activate(req.params.id);
//     res.json({ results });
//   } catch (error) {
//     res.status(500).json({
//       error: "error al activar el rol",
//     });
//   }
// };
// export const inactivateRoles = async (req, res) => {
//   try {
//     const results = await rolesModel.inactivate(req.params.id);
//     res.json({ results });
//   } catch (error) {
//     res.status(500).json({
//       error: "error al inactivar el rol",
//     });
//   }
// };
