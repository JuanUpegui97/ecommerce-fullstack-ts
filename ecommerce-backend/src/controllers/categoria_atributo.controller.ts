import { Request, Response } from "express";
import { crearCategoriaAtributoService, obtenerAtributosPorCategoriaService } from "../services/categoria_atributo.service.js";
import { crearCategoriaAtributoSchema } from "../schemas/categoria_atributo.schema.js";


export const obtenerAtributosPorCategoriaController = async (req: Request, res: Response) => {
    try {
        const categoriaId = Number(req.params.categoriaId);

        const atributos =
            await obtenerAtributosPorCategoriaService(categoriaId);

        return res.status(200).json(atributos);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al obtener los atributos"
        });
    }
};

export const crearCategoriaAtributoController = async (req: Request, res: Response) => {
    try {
        const categoriaId = Number(req.params.categoriaId);

        const data = crearCategoriaAtributoSchema.safeParse(req.body);

        if (!data.success) {
            return res.status(400).json({
                mensaje: "Datos inválidos",
                errores: data.error.flatten()
            });
        }

        const atributo = await crearCategoriaAtributoService(categoriaId, data.data);

        return res.status(201).json(atributo);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al crear el atributo"
        });
    }
};