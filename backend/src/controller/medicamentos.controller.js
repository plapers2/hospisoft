import { medicamentosModel } from "../models/medicamentos.model.js";

export const getMedicamentos = async (req, res) => {
  try {
    const results = await medicamentosModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar los medicamentos",
    });
  }
};
export const getMedicamentosById = async (req, res) => {
  try {
    const results = await medicamentosModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar el medicamento",
    });
  }
};
export const postMedicamentos = async (req, res) => {
  try {
    const results = await medicamentosModel.insert(req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al registrar el medicamento",
    });
  }
};
export const putMedicamentos = async (req, res) => {
  try {
    const results = await medicamentosModel.update(req.params.id, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al editar el medicamento",
    });
  }
};
// export const activateMedicamentos = async (req, res) => {
//   try {
//     const results = await medicamentosModel.activate(req.params.id);
//     res.json({ results });
//   } catch (error) {
//     res.status(500).json({
//       error: "error al activar el medicamento",
//     });
//   }
// };
// export const inactivateMedicamentos = async (req, res) => {
//   try {
//     const results = await medicamentosModel.inactivate(req.params.id);
//     res.json({ results });
//   } catch (error) {
//     res.status(500).json({
//       error: "error al inactivar el medicamento",
//     });
//   }
// };
