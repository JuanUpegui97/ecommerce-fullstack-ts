import {
    obtenerProductos,
    crearProducto
} from "../repositories/productos.repository.js";

import { CrearProductoDTO } from "../dto/producto.dto.js";

export const obtenerProductosService = async () => {
    return await obtenerProductos();
};

export const crearProductoService = async (
    data: CrearProductoDTO
) => {
    return await crearProducto(data);
};