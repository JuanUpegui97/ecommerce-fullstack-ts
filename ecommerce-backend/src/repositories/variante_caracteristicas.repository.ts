import pool from "../config/database.js";
import { CrearVarianteCaracteristicaDTO } from "../dto/variante_caracteristica.dto.js";

export const obtenerCaracteristicasPorVariante = async (varianteId: number) => {
    const result = await pool.query(
        `
        SELECT 
            vc.id,
            vc.variante_id,
            cav.categoria_atributo_id,
            ca.nombre AS atributo,
            cav.valor
        FROM variante_caracteristicas vc
        INNER JOIN categoria_atributo_valores cav
            ON vc.categoria_atributo_valor_id = cav.id
        INNER JOIN categoria_atributos ca
            ON cav.categoria_atributo_id = ca.id
        WHERE vc.variante_id = $1
        ORDER BY ca.nombre
        `,
        [varianteId]
    );

    return result.rows;
};

export const crearVarianteCaracteristica = async (varianteId: number,data: CrearVarianteCaracteristicaDTO
) => {
    const result = await pool.query(
        `
        INSERT INTO variante_caracteristicas
        (variante_id, categoria_atributo_valor_id)
        VALUES ($1, $2)
        RETURNING *
        `,
        [
            varianteId,
            data.categoria_atributo_valor_id
        ]
    );

    return result.rows[0];
};