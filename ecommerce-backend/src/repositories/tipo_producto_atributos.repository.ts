import pool from "../config/database.js";
import { crearTipoProductoAtributoDto } from "../dto/tipo_producto_atributo.dto.js";


export const obtenerAtributosPorTipoProducto = async (
    tipoProductoId: number
) => {
    const result = await pool.query(
        `
        SELECT id, tipo_producto_id, nombre
        FROM tipo_producto_atributos
        WHERE tipo_producto_id = $1
        ORDER BY nombre
        `,
        [tipoProductoId]
    );

    return result.rows;
};

export const crearTipoProductoAtributo = async (
    tipoProductoId: number,
    data: crearTipoProductoAtributoDto
) => {
    const result = await pool.query(
        `
        INSERT INTO tipo_producto_atributos
        (tipo_producto_id, nombre)
        VALUES ($1, $2)
        RETURNING *
        `,
        [tipoProductoId, data.nombre]
    );

    return result.rows[0];
};