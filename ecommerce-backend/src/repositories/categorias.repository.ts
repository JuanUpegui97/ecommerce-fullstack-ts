import pool from "../config/database.js"
import { crearCategoriaDto } from "../dto/categoria.dto.js";


export const obtenerCategorias = async () => {
    const result = await pool.query(`
        SELECT id, nombre, prefijo_sku
        FROM categorias
        ORDER BY nombre
    `);

    return result.rows;
};

export const crearCategoria = async (data : crearCategoriaDto) => {

    try {

        const result = await pool.query(
            `INSERT INTO categorias
            (nombre, prefijo_sku)
            VALUES ($1, $2)
            RETURNING *`,
            [
                data.nombre,
                data.prefijo_sku
            ]
        );

        return result.rows[0];

        
    } catch (error) {
        
        throw error;
    }
}