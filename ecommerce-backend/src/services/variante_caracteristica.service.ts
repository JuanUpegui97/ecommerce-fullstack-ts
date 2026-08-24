import {
    obtenerCaracteristicasPorVariante,
    crearVarianteCaracteristica
} from "../repositories/variante_caracteristicas.repository.js";

import { CrearVarianteCaracteristicaDTO } from "../dto/variante_caracteristica.dto.js";

export const obtenerCaracteristicasPorVarianteService = async (
    varianteId: number
) => {
    return await obtenerCaracteristicasPorVariante(varianteId);
};

export const crearVarianteCaracteristicaService = async (
    varianteId: number,
    data: CrearVarianteCaracteristicaDTO
) => {
    return await crearVarianteCaracteristica(varianteId, data);
};