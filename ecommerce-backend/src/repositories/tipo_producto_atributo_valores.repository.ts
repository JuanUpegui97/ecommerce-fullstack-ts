import pool from "../config/database.js";

import { CrearTipoProductoAtributoValorDTO } from "../dto/tipo_producto_atributo_valor.dto.js";

export const obtenerValoresPorAtributo = async (
    tipoProductoAtributoId: number
) => {
    const result = await pool.query(
        `
        SELECT id, tipo_producto_atributo_id, valor
        FROM tipo_producto_atributo_valores
        WHERE tipo_producto_atributo_id = $1
        ORDER BY valor
        `,
        [tipoProductoAtributoId]
    );

    return result.rows;
};

export const crearTipoProductoAtributoValor = async (
    tipoProductoAtributoId: number,
    data: CrearTipoProductoAtributoValorDTO
) => {
    const result = await pool.query(
        `
        INSERT INTO tipo_producto_atributo_valores
        (tipo_producto_atributo_id, valor)
        VALUES ($1, $2)
        RETURNING *
        `,
        [tipoProductoAtributoId, data.valor]
    );

    return result.rows[0];
};