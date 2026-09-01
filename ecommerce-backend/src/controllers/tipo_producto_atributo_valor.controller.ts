import { Request, Response } from "express";


import {
    crearTipoProductoAtributoValorSchema
} from "../schemas/tipo_producto_atributo_valor.schema.js";
import { crearTipoProductoAtributoValorService, obtenerValoresPorAtributoService } from "../services/tipo_producto_atributo_valor.service.js";

export const obtenerValoresPorAtributoController = async (
    req: Request,
    res: Response
) => {
    try {
        const tipoProductoAtributoId = Number(
            req.params.tipoProductoAtributoId
        );

        const valores = await obtenerValoresPorAtributoService(
            tipoProductoAtributoId
        );

        return res.status(200).json(valores);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al obtener los valores del atributo"
        });
    }
};

export const crearTipoProductoAtributoValorController = async (
    req: Request,
    res: Response
) => {
    try {
        const tipoProductoAtributoId = Number(
            req.params.tipoProductoAtributoId
        );

        const data = crearTipoProductoAtributoValorSchema.safeParse(
            req.body
        );

        if (!data.success) {
            return res.status(400).json({
                mensaje: "Datos inválidos",
                errores: data.error.flatten()
            });
        }

        const valor = await crearTipoProductoAtributoValorService(
            tipoProductoAtributoId,
            data.data
        );

        return res.status(201).json(valor);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al crear el valor del atributo"
        });
    }
};