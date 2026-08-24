import pool from "../config/database.js";
import { CrearCategoriaAtributoValorDTO } from "../dto/categoria_atributo_valor.dto.js";

export const obtenerValoresPorAtributo = async (categoriaAtributoId: number) => {
    const result = await pool.query(
        `
        SELECT id, categoria_atributo_id, valor
        FROM categoria_atributo_valores
        WHERE categoria_atributo_id = $1
        ORDER BY valor
        `,
        [categoriaAtributoId]
    );

    return result.rows;
};

export const crearCategoriaAtributoValor = async (categoriaAtributoId: number, data: CrearCategoriaAtributoValorDTO) => {
    const result = await pool.query(
        `
        INSERT INTO categoria_atributo_valores
        (categoria_atributo_id, valor)
        VALUES ($1, $2)
        RETURNING *
        `,
        [categoriaAtributoId, data.valor]
    );

    return result.rows[0];
};