// Importamos la conexion
import cnx from "./db.model.js";

// Habilitamos las promesas
const db = cnx.promise();

// Declaramos el modelo a exportar
export const MedicoModel = {
  findAll: async () => {
    const sql =
      "SELECT usuarios.*, especialidades.nombre as especialidad_nombre, especialidades.estado as especialidad_estado FROM usuarios JOIN usuarios_especialidades ON usuarios_especialidades.usuarios_id = usuarios.id JOIN especialidades ON especialidades.id = usuarios_especialidades.especialidades_id";
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql =
      "SELECT usuarios.*, especialidades.nombre as especialidad_nombre, especialidades.estado as especialidad_estado FROM usuarios JOIN usuarios_especialidades ON usuarios_especialidades.usuarios_id = usuarios.id JOIN especialidades ON especialidades.id = usuarios_especialidades.especialidades_id WHERE usuarios.id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data) => {
    const {
      num_documento,
      nombre,
      apellido,
      telefono,
      direccion,
      email,
      password,
      registro_profesional,
      consultorio,
      piso,
      estado,
      fecha_vinculacion,
      roles_id,
      especialidades,
      horarios_medicos,
    } = data;

    const medicoObj = {
      num_documento: num_documento,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      direccion: direccion,
      email: email,
      password: password,
      registro_profesional: registro_profesional,
      consultorio: consultorio,
      piso: piso,
      estado: estado,
      fecha_vinculacion: fecha_vinculacion,
      roles_id: roles_id,
    };

    // Insertar el medico / usuario
    const sql = "INSERT INTO usuarios SET ?";
    const [rows] = await db.query(sql, [medicoObj]);

    // Obtener el ID insertado
    const usuarios_id = rows.insertId;

    // Asignar las especialidades al medico insertado
    especialidades.forEach(async (especialidades_id) => {
      const pivoteObj = {
        usuarios_id,
        especialidades_id,
      };
      let sqlPivote = "INSERT INTO usuarios_especialidades SET ?";
      await db.query(sqlPivote, [pivoteObj]);
    });

    horarios_medicos.forEach(async (horarios_medicos_id) => {
      const pivoteObj = {
        usuarios_id,
        horarios_medicos_id,
      };

      let sqlPivote = "INSERT INTO usuarios_horarios_medicos SET ?";
      await db.query(sqlPivote, [pivoteObj]);
    });

    return rows;
  },
  update: async (data, id) => {
    const {
      num_documento,
      nombre,
      apellido,
      telefono,
      direccion,
      email,
      password,
      registro_profesional,
      consultorio,
      piso,
      estado,
      fecha_vinculacion,
      roles_id,
      especialidades,
    } = data;

    const medicoObj = {
      num_documento: num_documento,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      direccion: direccion,
      email: email,
      password: password,
      registro_profesional: registro_profesional,
      consultorio: consultorio,
      piso: piso,
      estado: estado,
      fecha_vinculacion: fecha_vinculacion,
      roles_id: roles_id,
    };

    // Actualizar el medico / usuario
    const sql = "UPDATE usuarios SET ? WHERE id = ?";
    const [rows] = await db.query(sql, [medicoObj, id]);

    // Eliminar las especialidades asignadas al medico
    const sqlDelete =
      "DELETE FROM usuarios_especialidades WHERE usuarios_id = ?";
    await db.query(sqlDelete, [id]);

    // Obtener el ID insertado
    const usuarios_id = id;

    // Asignar las especialidades al medico insertado
    especialidades.forEach(async (especialidades_id) => {
      const pivoteObj = {
        usuarios_id,
        especialidades_id,
      };
      let sqlPivote = "INSERT INTO usuarios_especialidades SET ?";
      await db.query(sqlPivote, [pivoteObj]);
    });

    return rows;
  },

  desactivar: async (id) => {
    const estado = "Inactivo";
    const sql = "UPDATE usuarios SET estado = ? WHERE id = ?";
    const [rows] = await db.query(sql, [estado, id]);
    return rows;
  },
  activar: async (id) => {
    const estado = "Activo";
    const sql = "UPDATE usuarios SET estado = ? WHERE id = ?";
    const [rows] = await db.query(sql, [estado, id]);
    return rows;
  },

  // !! falta validar
  validateUpdateRol: async (id) => {
    const sql = "SELECT roles_id FROM usuarios WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    console.log(rows[0].roles_id);

    if (rows[0].roles_id === 2) {
      return true;
    } else {
      return false;
    }
  },
};
