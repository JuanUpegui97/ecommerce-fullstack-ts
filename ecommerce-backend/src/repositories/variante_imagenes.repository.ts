import pool from "../config/database.js";
import { CrearVarianteImagenDTO } from "../dto/variante_imagen.dto.js";

export const obtenerImagenesPorVariante = async (varianteId: number) => {
    const result = await pool.query(
        `
        SELECT id, variante_id, url
        FROM variante_imagenes
        WHERE variante_id = $1
        ORDER BY id
        `,
        [varianteId]
    );

    return result.rows;
};

export const crearVarianteImagen = async (varianteId: number, data: CrearVarianteImagenDTO) => {
    const result = await pool.query(
        `
        INSERT INTO variante_imagenes
        (variante_id, url)
        VALUES ($1, $2)
        RETURNING *
        `,
        [
            varianteId,
            data.url
        ]
    );

    return result.rows[0];
};