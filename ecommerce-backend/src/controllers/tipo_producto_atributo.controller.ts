import { Request, Response } from "express";

import {
    crearTipoProductoAtributoService,
    obtenerAtributosPorTipoProductoService
} from "../services/tipo_producto_atributo.service.js";

import { crearTipoProductoAtributoSchema } from "../schemas/tipo_producto_atributo.schema.js";


export const obtenerAtributosPorTipoProductoController = async (
    req: Request,
    res: Response
) => {
    try {
        const tipoProductoId = Number(req.params.tipoProductoId);

        const atributos =
            await obtenerAtributosPorTipoProductoService(tipoProductoId);

        return res.status(200).json(atributos);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al obtener los atributos"
        });
    }
};

export const crearTipoProductoAtributoController = async (
    req: Request,
    res: Response
) => {
    try {
        const tipoProductoId = Number(req.params.tipoProductoId);

        const data = crearTipoProductoAtributoSchema.safeParse(req.body);

        if (!data.success) {
            return res.status(400).json({
                mensaje: "Datos inválidos",
                errores: data.error.flatten()
            });
        }

        const atributo = await crearTipoProductoAtributoService(
            tipoProductoId,
            data.data
        );

        return res.status(201).json(atributo);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al crear el atributo"
        });
    }
};