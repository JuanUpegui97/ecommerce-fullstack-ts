import pool from "../config/database.js";

import { CrearTipoProductoDTO } from "../dto/tipo_producto.dto.js";


export const obtenerTiposPorCategoria = async (categoriaId: number) => {

    const result = await pool.query(
        `
        SELECT id, categoria_id, nombre
        FROM tipos_productos
        WHERE categoria_id = $1
        ORDER BY nombre
        `,
        [categoriaId]
    );

    return result.rows;
};


export const crearTipoProducto = async (data: CrearTipoProductoDTO) => {

    const result = await pool.query(
        `
        INSERT INTO tipos_productos
        (categoria_id, nombre)
        VALUES ($1, $2)
        RETURNING *
        `,
        [
            data.categoria_id,
            data.nombre
        ]
    );

    return result.rows[0];
};