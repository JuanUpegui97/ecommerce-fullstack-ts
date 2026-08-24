import {
    obtenerVariantesPorProducto,
    crearVariante
} from "../repositories/variantes.repository.js";

import { CrearVarianteDTO } from "../dto/variante.dto.js";

export const obtenerVariantesPorProductoService = async (
    productoId: number
) => {
    return await obtenerVariantesPorProducto(productoId);
};

export const crearVarianteService = async (
    productoId: number,
    data: CrearVarianteDTO
) => {
    return await crearVariante(productoId, data);
};