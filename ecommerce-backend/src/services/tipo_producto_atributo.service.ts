import { crearTipoProductoAtributoDto } from "../dto/tipo_producto_atributo.dto.js";

import {
    crearTipoProductoAtributo,
    obtenerAtributosPorTipoProducto
} from "../repositories/tipo_producto_atributos.repository.js";

export const obtenerAtributosPorTipoProductoService = async (
    tipoProductoId: number
) => {
    return await obtenerAtributosPorTipoProducto(tipoProductoId);
};

export const crearTipoProductoAtributoService = async (
    tipoProductoId: number,
    data: crearTipoProductoAtributoDto
) => {
    return await crearTipoProductoAtributo(tipoProductoId, data);
};