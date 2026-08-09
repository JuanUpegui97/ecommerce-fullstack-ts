import pool from "../config/database.js";
import { CrearUsuarioDTO } from "../dto/user.dto.js";


export const obtenerUsuarios = async () => {

    const result = await pool
        .query(
            `SELECT id, nombre, apellido, email, telefono, cedula, rol, created_at
            FROM usuarios`
        );

    return result.rows;
};


export const crearUsuario = async (data: CrearUsuarioDTO) => {

    try {

        const result = await pool.query(
            `INSERT INTO usuarios
            (nombre, apellido, email, telefono, cedula, password, rol)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`,
            [
                data.nombre,
                data.apellido,
                data.correo,
                data.celular,
                data.cedula,
                data.contrasena,
                "cliente"
            ]
        );

        return result.rows[0];

    } catch (error) {

        throw error;

    }
};