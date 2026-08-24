import pool from "../config/database.js";
import { CrearProductoDTO } from "../dto/producto.dto.js";

export const obtenerProductos = async () => {
    const result = await pool.query(`
        SELECT id, categoria_id, nombre, descripcion
        FROM productos
        ORDER BY nombre
    `);

    return result.rows;
};

export const crearProducto = async (data: CrearProductoDTO) => {
    const result = await pool.query(
        `
        INSERT INTO productos
        (categoria_id, nombre, descripcion)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
        [
            data.categoria_id,
            data.nombre,
            data.descripcion
        ]
    );

    return result.rows[0];
};