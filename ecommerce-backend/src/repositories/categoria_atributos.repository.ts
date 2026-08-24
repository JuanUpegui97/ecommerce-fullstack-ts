import pool from "../config/database.js";
import { crearCategoriaAtributoDto } from "../dto/categoria_atributo.dto.js";

export const obtenerAtributosPorCategoria = async (categoriaId: number) => {
    const result = await pool.query(
        `
        SELECT id, categoria_id, nombre
        FROM categoria_atributos
        WHERE categoria_id = $1
        ORDER BY nombre
        `,
        [categoriaId]
    );

    return result.rows;
};

export const crearCategoriaAtributo = async (categoriaId: number, data: crearCategoriaAtributoDto
    
) => {
    const result = await pool.query(
        `
        INSERT INTO categoria_atributos
        (categoria_id, nombre)
        VALUES ($1, $2)
        RETURNING *
        `,
        [categoriaId, data.nombre]
    );

    return result.rows[0];
};