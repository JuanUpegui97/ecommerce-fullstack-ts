import {
    obtenerValoresPorAtributo,
    crearTipoProductoAtributoValor
} from "../repositories/tipo_producto_atributo_valores.repository.js";

import {
    CrearTipoProductoAtributoValorDTO
} from "../dto/tipo_producto_atributo_valor.dto.js";

export const obtenerValoresPorAtributoService = async (
    tipoProductoAtributoId: number
) => {
    return await obtenerValoresPorAtributo(tipoProductoAtributoId);
};

export const crearTipoProductoAtributoValorService = async (
    tipoProductoAtributoId: number,
    data: CrearTipoProductoAtributoValorDTO
) => {
    return await crearTipoProductoAtributoValor(
        tipoProductoAtributoId,
        data
    );
};