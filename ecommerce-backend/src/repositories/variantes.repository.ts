import pool from "../config/database.js";
import { CrearVarianteDTO } from "../dto/variante.dto.js";

export const obtenerVariantesPorProducto = async (productoId: number) => {
    const result = await pool.query(
        `
        SELECT id, producto_id, sku, stock, precio
        FROM variantes
        WHERE producto_id = $1
        ORDER BY id
        `,
        [productoId]
    );

    return result.rows;
};

export const crearVariante = async (productoId: number,data: CrearVarianteDTO
) => {
    const result = await pool.query(
        `
        INSERT INTO variantes
        (producto_id, sku, stock, precio)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,
        [
            productoId,
            data.sku,
            data.stock,
            data.precio
        ]
    );

    return result.rows[0];
};