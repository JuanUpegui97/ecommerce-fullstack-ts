import { Request, Response } from "express";

import { obtenerValoresPorAtributoService, crearCategoriaAtributoValorService } from "../services/categoria_atributo_valor.service.js";

import { crearCategoriaAtributoValorSchema } from "../schemas/categoria_atributo_valor.schema.js";

export const obtenerValoresPorAtributoController = async (req: Request, res: Response) => {
    try {
        const categoriaAtributoId = Number(req.params.categoriaAtributoId);

        const valores = await obtenerValoresPorAtributoService(
            categoriaAtributoId
        );

        return res.status(200).json(valores);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al obtener los valores del atributo"
        });
    }
};

export const crearCategoriaAtributoValorController = async (req: Request, res: Response) => {
    try {
        const categoriaAtributoId = Number(req.params.categoriaAtributoId);

        const data = crearCategoriaAtributoValorSchema.safeParse(req.body);

        if (!data.success) {
            return res.status(400).json({
                mensaje: "Datos inválidos",
                errores: data.error.flatten()
            });
        }

        const valor = await crearCategoriaAtributoValorService(
            categoriaAtributoId,
            data.data
        );

        return res.status(201).json(valor);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al crear el valor del atributo"
        });
    }
}