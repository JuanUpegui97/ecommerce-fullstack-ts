import { Request, Response } from "express";

import { obtenerVariantesPorProductoService,crearVarianteService} from "../services/variante.service.js";

import { crearVarianteSchema } from "../schemas/variante.schema.js";

export const obtenerVariantesPorProductoController = async ( req: Request, res: Response) => {
    try {
        const productoId = Number(req.params.productoId);

        const variantes = await obtenerVariantesPorProductoService(
            productoId
        );

        return res.status(200).json(variantes);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al obtener las variantes"
        });
    }
};

export const crearVarianteController = async ( req: Request, res: Response) => {
    try {
        const productoId = Number(req.params.productoId);

        const data = crearVarianteSchema.safeParse(req.body);

        if (!data.success) {
            return res.status(400).json({
                mensaje: "Datos inválidos",
                errores: data.error.flatten()
            });
        }

        const variante = await crearVarianteService(
            productoId,
            data.data
        );

        return res.status(201).json(variante);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al crear la variante"
        });
    }
};