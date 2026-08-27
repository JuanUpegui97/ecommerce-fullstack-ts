import { obtenerTiposPorCategoria, crearTipoProducto } from "../repositories/tipo_productos.repository.js";

import { CrearTipoProductoDTO } from "../dto/tipo_producto.dto.js";


export const obtenerTiposPorCategoriaService = async (categoriaId: number) => {

    return await obtenerTiposPorCategoria(categoriaId);

};


export const crearTipoProductoService = async (data: CrearTipoProductoDTO) => {

    return await crearTipoProducto(data);

};